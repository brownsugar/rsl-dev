<?php

/**
 * Custom wp-json API path
 */
function rsl_rest_url_prefix( $slug ) {
	return 'api';
}
add_filter( 'rest_url_prefix', 'rsl_rest_url_prefix' );

/**
 * Add rsl/v1 endpoint
 */
function rsl_rest_api_init() {
	register_rest_route(
		'rsl/v1',
		'/site',
		array(
			'methods'  => 'GET',
			'callback' => 'get_site_info',
		)
	);
};
add_action( 'rest_api_init', 'rsl_rest_api_init' );

/**
 * Get site infos
 */
function get_site_info( $request ) {
	$fields = array(
		'name',
		'description',
		'wpurl',
		'url',
		'admin_email',
		'charset',
		'language',
		'rss_url',
		'rss2_url',
	);

	$data = array();
	foreach ( $fields as $field ) {
		$data[ $field ] = get_bloginfo( $field );
	}

	return $data;
}

/**
 * Add cache support for custom endpoint
 * https://wordpress.org/plugins/wp-rest-cache/
 */
function rsl_wprc_endpoint( $allowed_endpoints ) {
	if ( ! isset( $allowed_endpoints['rsl/v1'] ) || ! in_array( 'site', $allowed_endpoints['rsl/v1'], true ) ) {
		$allowed_endpoints['rsl/v1'][] = 'site';
	}
	return $allowed_endpoints;
}
add_filter( 'wp_rest_cache/allowed_endpoints', 'rsl_wprc_endpoint', 10, 1 );
