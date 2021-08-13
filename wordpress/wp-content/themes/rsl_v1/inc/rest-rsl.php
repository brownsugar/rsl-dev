<?php

require_once 'rest/site.php';
require_once 'rest/vote.php';

$rsl_endpoints        = array(
	array(
		'namespace' => 'rsl/v1',
		'route'     => '/site',
		'methods'   => 'GET',
		'callback'  => 'rest_site_handler',
	),
	array(
		'namespace' => 'rsl/v1',
		'route'     => '/vote/(?P<action>[\w-]+)',
		'methods'   => array( 'GET', 'POST', 'PUT' ),
		'callback'  => 'rest_vote_handler',
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
 * Add rsl custom endpoint
 * https://developer.wordpress.org/reference/functions/register_rest_route/
 */
function rsl_rest_api_init() {
	global $rsl_endpoints;

	foreach ( $rsl_endpoints as $endpoint ) {
		register_rest_route(
			$endpoint['namespace'],
			$endpoint['route'],
			array(
				'methods'             => $endpoint['methods'],
				'callback'            => $endpoint['callback'],
				'permission_callback' => '__return_true',
			)
		);
	}

	header( 'Access-Control-Allow-Origin: *' );
	header( 'Access-Control-Allow-Methods: OPTIONS, GET, POST, PUT, PATCH, DELETE' );
	header( 'Access-Control-Allow-Credentials: true' );
	header( 'Vary: Origin', false );
};
add_action( 'rest_api_init', 'rsl_rest_api_init' );

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
