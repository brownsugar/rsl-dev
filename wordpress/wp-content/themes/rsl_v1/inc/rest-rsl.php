<?php

$rsl_endpoints        = array(
	array(
		'namespace' => 'rsl/v1',
		'route'     => '/site',
		'callback'  => 'get_site_info',
	),
);
$rsl_cached_endpoints = array(
	'rsl/v1' => array(
		'site',
	),
	'acf/v3' => array(
		'options',
	),
);

/**
 * Custom wp-json API path
 */
function rsl_rest_url_prefix( $slug ) {
	return 'api';
}
add_filter( 'rest_url_prefix', 'rsl_rest_url_prefix' );

/**
 * Add rsl/v1 endpoint
 * https://developer.wordpress.org/reference/functions/register_rest_route/
 */
function rsl_rest_api_init() {
	global $rsl_endpoints;

	foreach ( $rsl_endpoints as $endpoint ) {
		register_rest_route(
			$endpoint['namespace'],
			$endpoint['route'],
			array(
				'methods'  => 'GET',
				'callback' => $endpoint['callback'],
			)
		);
	}
};
add_action( 'rest_api_init', 'rsl_rest_api_init' );

/**
 * Get site infos
 * https://developer.wordpress.org/reference/functions/get_bloginfo/
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
 * Add cache support for custom endpoints
 * https://wordpress.org/plugins/wp-rest-cache/
 */
function rsl_wprc_endpoint( $allowed_endpoints ) {
	global $rsl_cached_endpoints;

	foreach ( $rsl_cached_endpoints as $namespace => $routes ) {
		foreach ( $routes as $route ) {
			if ( ! isset( $allowed_endpoints[ $namespace ] ) || ! in_array( $route, $allowed_endpoints[ $namespace ], true ) ) {
				$allowed_endpoints[ $namespace ][] = $route;
			}
		}
	}
	return $allowed_endpoints;
}
add_filter( 'wp_rest_cache/allowed_endpoints', 'rsl_wprc_endpoint', 10, 1 );

/**
 * Add custom cache type
 * https://wordpress.org/plugins/wp-rest-cache/
 */
function rsl_wprc_type( $object_type, $cache_key, $data, $uri ) {
	if ( 'unknown' !== $object_type ) {
		return $object_type;
	}
	list( ,, $type ) = explode( '/', $uri );
	return $type;
}
add_filter( 'wp_rest_cache/determine_object_type', 'rsl_wprc_type', 10, 4 );
