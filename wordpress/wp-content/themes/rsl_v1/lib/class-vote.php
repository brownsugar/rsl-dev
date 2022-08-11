<?php

class Vote {
	const BE_CONFIG_KEY  = 'rsl-fe-config';
	const FE_CONFIG_KEY  = 'rsl-be-config';
	const VOTE_TABLE_KEY = 'rsl-vote-table';

	const CATEGORY_DATA_PRESET = array(
		'season2' => array(
			'config_key'  => 'season2',
			'sms_subject' => 'RSL Season 2 Voting',
		),
		'season3' => array(
			'config_key'  => 'season3',
			'sms_subject' => 'RSL Season 3 Voting',
		),
	);

	private $request;
	private $category_data;
	private $fe_config;
	private $be_config;
	private $vote_table;

	public function __construct( $request ) {
		$this->request = $request;
	}

	public function init() {
		$action  = $this->request->get_param( 'action' );
		$fn_name = $action . '_handler';
		if ( ! method_exists( $this, $fn_name ) ) {
			return new WP_Error( 0, 'Unknown api action.' );
		}
		try {
			$this->validate_category();
			$this->fetch_fields();
			return $this->$fn_name();
		} catch ( Exception $e ) {
			return new WP_Error( $e->getCode(), $e->getMessage() );
		}
	}

	private function validate_category() {
		$query = $this->validate_query_params( array( 'category' ) );
		if ( ! $query['category'] || ! in_array( $query['category'], array_keys( self::CATEGORY_DATA_PRESET ), true ) ) {
			throw new Exception( 'Unknown event category.', -1 );
		}
		$this->category_data = self::CATEGORY_DATA_PRESET[ $query['category'] ];
	}

	private function fetch_fields() {
		$this->fe_config  = get_fields( self::BE_CONFIG_KEY );
		$this->be_config  = get_fields( self::FE_CONFIG_KEY );
		$this->vote_table = get_fields( self::VOTE_TABLE_KEY );
	}

	/**
	 * Get the voting status by phone
	 */
	private function status_handler() {
		$this->validate_request_method( array( 'GET' ) );
		$this->validate_event_status();
		$query     = $this->validate_query_params( array( 'phone' ) );
		$vote      = $this->fe_config[ $this->category_data['config_key'] ]['vote'];
		$vote_data = $this->get_vote_data_by_phone( $query['phone'] );

		$message   = '';
		$eligible  = false;
		$requested = 0;
		if ( $vote_data ) {
			if ( ! empty( $vote_data['selection'] ) ) {
				// Voted
				$message = 'ALREADY_VOTED';
			} elseif ( $vote_data['attempt_count'] >= $vote['max_attempt'] ) {
				// Reach max attempt limit
				$message = 'MAX_ATTEMPT';
			} else {
				$eligible = true;
			}
			$requested = intval( $vote_data['request_count'] );
		} else {
			$eligible = true;
		}

		return new WP_REST_Response(
			array(
				'code'    => 0,
				'message' => $message,
				'data'    => array(
					'phone'     => $query['phone'],
					'eligible'  => $eligible,
					'requested' => $requested,
				),
			)
		);
	}

	/**
	 * Request the verification code via SMS
	 */
	private function request_handler() {
		$this->validate_request_method( array( 'POST' ) );
		$this->validate_event_status();
		$param     = $this->validate_body_params( array( 'phone' ) );
		$vote      = $this->fe_config[ $this->category_data['config_key'] ]['vote'];
		$vote_data = $this->get_vote_data_by_phone( $param['phone'] );

		$to_send_code = false;
		$message      = '';
		if ( $vote_data ) {
			if ( ! empty( $vote_data['selection'] ) ) {
				// Voted
				$message = 'ALREADY_VOTED';
			} elseif ( $vote_data['attempt_count'] >= $vote['max_attempt'] ) {
				// Reach max attempt limit
				$message = 'MAX_ATTEMPT';
			} elseif ( $vote_data['request_count'] >= $vote['max_request'] ) {
				// Reach max request limit
				$message = 'MAX_REQUEST';
			} elseif ( ( strtotime( wp_date( 'Y-m-d H:i:s' ) ) - strtotime( $vote_data['request_datetime'] ) ) / 60 < 5 ) {
				// Request too fast (less than 5 mins)
				$message = 'REQUEST_LIMIT';
			} else {
				$to_send_code = true;
			}
		} else {
			$to_send_code = true;
		}

		$code_sent = false;
		if ( $to_send_code ) {
			$code      = $this->get_verification_code();
			$code_sent = $this->send_sms( $param['phone'], $code );
			if ( ! $code_sent ) {
				$message = 'SMS_SEND_FAILED';
			}

			$request_count = $vote_data ? $vote_data['request_count'] : 0;
			$data          = array(
				'verification_code' => $code,
				'request_count'     => $request_count + ( $code_sent ? 1 : 0 ),
				'request_datetime'  => wp_date( 'Y-m-d H:i:s' ),
			);
			if ( $vote_data ) {
				$row = array_merge(
					$vote_data,
					$data
				);
				$this->update_vote_data_by_phone( $param['phone'], $row );
			} else {
				$row = array_merge(
					array(
						'phone' => $param['phone'],
					),
					$data
				);
				$this->add_vote_data( $row );
			}
		}

		return new WP_REST_Response(
			array(
				'code'    => 0,
				'message' => $message,
				'data'    => array(
					'phone'    => $param['phone'],
					'codeSent' => $code_sent,
				),
			)
		);
	}

	/**
	 * Check if the verification code is matched and submit selection
	 */
	private function submit_handler() {
		$this->validate_request_method( array( 'PUT' ) );
		$this->validate_event_status();

		$query               = $this->validate_query_params();
		$required_param_keys = array( 'phone', 'code' );
		if ( $query['validateSelection'] ) {
			$required_param_keys[] = 'selection';
		}

		$param     = $this->validate_body_params( $required_param_keys );
		$vote      = $this->fe_config[ $this->category_data['config_key'] ]['vote'];
		$vote_data = $this->get_vote_data_by_phone( $param['phone'] );

		$attempted = intval( $vote_data['attempt_count'] );
		$success   = false;
		if ( $vote_data ) {
			if ( ! empty( $vote_data['selection'] ) ) {
				// Voted
				$message = 'ALREADY_VOTED';
			} elseif ( $attempted >= $vote['max_attempt'] ) {
				// Reach max attempt limit
				$message = 'MAX_ATTEMPT';
			} else {
				$data = array(
					'attempt_datetime' => wp_date( 'Y-m-d H:i:s' ),
				);

				if ( $param['code'] === $vote_data['verification_code'] ) {
					$success = true;

					$selection = sanitize_text_field( $param['selection'] );
					if ( $selection ) {
						$data['selection'] = $selection;
					}
				} else {
					$attempted = ++$attempted;
					$message   = 'CODE_ERROR';
				}
				$data['attempt_count'] = $attempted;

				$row = array_merge(
					$vote_data,
					$data
				);
				$this->update_vote_data_by_phone( $param['phone'], $row );
			}
		}

		return new WP_REST_Response(
			array(
				'code'    => 0,
				'message' => $message,
				'data'    => array(
					'phone'     => $param['phone'],
					'success'   => $success,
					'attempted' => $attempted,
				),
			)
		);
	}

	/**
	 * Check if request method is acceptable then return it
	 */
	private function validate_request_method( $accepted_methods = array() ) {
		$method = $this->request->get_method();
		if ( ! in_array( $method, $accepted_methods, true ) ) {
			throw new Exception( 'Unacceptable request method.', -2 );
		}
		return $method;
	}

	/**
	 * Check if event is active
	 */
	private function validate_event_status() {
		$vote = $this->fe_config[ $this->category_data['config_key'] ]['vote'];
		$from = strtotime( $vote['from_datetime'] );
		$to   = strtotime( $vote['to_datetime'] );
		$now  = strtotime( wp_date( 'Y-m-d H:i:s' ) );
		if ( $vote['maintenance_mode'] ) {
			throw new Exception( 'Voting feature is currently under maintenance mode.', -3 );
		} elseif ( $now < $from || $now > $to ) {
			throw new Exception( 'Not in event period.', -3 );
		}
	}

	/**
	 * Check if required query strings are provided then return them
	 */
	private function validate_query_params( $required_query_keys = array() ) {
		$queries         = $this->request->get_query_params();
		$query_keys      = array_keys( $queries );
		$missing_queries = array_diff( $required_query_keys, $query_keys );
		if ( count( $missing_queries ) > 0 ) {
			throw new Exception(
				'Missing some required queries: ' . implode( ', ', $missing_queries ) . '.',
				-4
			);
		}
		return $queries;
	}

	/**
	 * Check if required post parameters are provided then return them
	 */
	private function validate_body_params( $required_param_keys = array() ) {
		$params         = $this->request->get_json_params();
		$param_keys     = array_keys( $params );
		$missing_params = array_diff( $required_param_keys, $param_keys );
		if ( count( $missing_params ) > 0 ) {
			throw new Exception(
				'Missing some required params: ' . implode( ', ', $missing_params ) . '.',
				-5
			);
		}
		return $params;
	}

	/**
	 * Get the vote data by phone
	 */
	private function get_vote_data_by_phone( $phone, $return_row_index = false ) {
		$table = $this->vote_table;
		if ( $table && $table['vote_table'] && $this->is_valid_phone( $phone ) ) {
			$data = array_filter(
				$table['vote_table'],
				function( $array ) use ( $phone ) {
					return $phone === $array['phone'];
				},
			);
			if ( count( $data ) ) {
				$index = key( $data );
				// Index starts from 0, row index starts from 1
				return $return_row_index ? $index + 1 : $data[ $index ];
			}
		}
		return $return_row_index ? 0 : null;
	}

	/**
	 * Add new vote data
	 */
	private function add_vote_data( $row = array() ) {
		return add_row( 'vote_table', $row, self::VOTE_TABLE_KEY );
	}

	/**
	 * Update existing vote data by phone
	 */
	private function update_vote_data_by_phone( $phone, $row = array() ) {
		$row_index = $this->get_vote_data_by_phone( $phone, true );
		return update_row( 'vote_table', $row_index, $row, self::VOTE_TABLE_KEY );
	}

	/**
	 * Check if given phone is valid
	 */
	private function is_valid_phone( $phone ) {
		return $phone && preg_match( '/09[\d]{8}/', $phone );
	}

	/**
	 * Generate some random numbers as verification code
	 */
	private function get_verification_code() {
		$code = '';
		for ( $i = 0; $i < 6; $i++ ) {
			$code .= wp_rand( 0, 9 );
		}
		return $code;
	}

	/**
	 * Send SMS via specific service
	 */
	private function send_sms( $phone, $code ) {
		$service = $this->be_config['every8d'];
		if ( $service['test_mode'] ) {
			return true;
		}

		require_once 'class-every8d.php';
		$every8d = new Every8d( $service['username'], $service['password'] );
		$subject = $this->category_data['sms_subject'];
		$message = '【RSL 賽事聯盟】您的人氣王投票簡訊驗證碼為：' . $code;
		$success = $every8d->send_sms( $subject, $message, $phone );
		return $success;
	}
}
