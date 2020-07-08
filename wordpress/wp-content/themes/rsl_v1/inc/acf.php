<?php

$option_pages = array(
	array(
		'slug'  => 'rsl-fe-config',
		'title' => 'RSL 前台設定',
		'icon'  => 'dashicons-admin-settings',
	),
);

/**
 * Add acf option page
 * https://www.advancedcustomfields.com/resources/acf_add_options_page/
 */
function rsl_acf_init() {
	global $option_pages;

	if ( function_exists( 'acf_add_options_page' ) ) {
		foreach ( $option_pages as $page ) {
			acf_add_options_page(
				array(
					'page_title' => $page['title'],
					'menu_slug'  => $page['slug'],
					'post_id'    => $page['slug'],
					'icon_url'   => $page['icon'],
				)
			);
		}
	}
}
add_action( 'acf/init', 'rsl_acf_init' );

/**
 * Enable 'show' option in acf setting page
 * https://wordpress.org/plugins/wp-rest-cache/
 */
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

/**
 * Hook actions after saving fields data.
 * https://www.advancedcustomfields.com/resources/acf-save_post/
 */
function rsl_acf_save_post( $post_id ) {
	global $option_pages;

	$page_slugs = array_map(
		function ( $page ) {
			return $page['slug'];
		},
		$option_pages
	);

	if ( in_array( $post_id, $page_slugs, true ) ) {
		// Flush the api cache.
		$endpoint = '/api/acf/v3/options/' . $post_id;
		if ( class_exists( 'WP_Rest_Cache_Plugin\Includes\Caching\Caching' ) ) {
			$wprc = WP_Rest_Cache_Plugin\Includes\Caching\Caching::get_instance();
			if ( method_exists( $wprc, 'delete_cache_by_endpoint' ) ) {
				$wprc->delete_cache_by_endpoint( $endpoint, \WP_Rest_Cache_Plugin\Includes\Caching\Caching::FLUSH_LOOSE );
			}
		}
	}
}
add_action( 'acf/save_post', 'rsl_acf_save_post' );
