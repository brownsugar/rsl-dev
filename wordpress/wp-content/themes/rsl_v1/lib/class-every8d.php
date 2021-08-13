<?php

class Every8d {
	const API_URL       = 'https://oms.every8d.com';
	const SEND_SMS_PATH = '/API21/HTTP/sendSMS.ashx';

	private $username;
	private $password;

	public function __construct( $username, $password ) {
		$this->username = $username;
		$this->password = $password;
	}

	public function send_sms( $subject, $message, $phone ) {
		$url      = self::API_URL . self::SEND_SMS_PATH;
		$params   = array(
			'UID'  => $this->username,
			'PWD'  => $this->password,
			'SB'   => $subject,
			'MSG'  => $message,
			'DEST' => $phone,
			'ST'   => '',
		);
		$response = wp_remote_get( $url . '?' . http_build_query( $params ) );

		list(
			$credit,
			$sended,
			$cost,
			$unsend,
			$batch_id
		) = explode( ',', $response['body'] );
		return $credit > -1 && '0' === $unsend;
	}
}
