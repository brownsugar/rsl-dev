<?php

define( 'THEME_ROOT', get_template_directory() );
define( 'LIB_ROOT', THEME_ROOT . DIRECTORY_SEPARATOR . 'lib' );

require_once 'inc/rest-rsl.php';
require_once 'inc/extends.php';
require_once 'inc/uploads.php';
require_once 'inc/shortcode.php';
require_once 'inc/acf.php';

/**
 * Improve oembed feature
 */
function rsl_embed_oembed_html( $cache, $url, $attr, $post_ID ) {
	if ( strpos( $url, 'imgur.com' ) !== false || strpos( $cache, 'data-secret' ) !== false ) {
		/**
		 * Do not embed Imgur images & WordPress post links
		 */
		return null;
	} else {
		/**
		 * Make embeded content responsive (16:9)
		 */
		return '<div class="responsive-embed">' . $cache . '</div>';
	}
}
add_filter( 'embed_oembed_html', 'rsl_embed_oembed_html', 99, 4 );

/**
 * Change excerpt ellipsis
 */
function rsl_excerpt_more( $more ) {
	return '...';
}
add_filter( 'excerpt_more', 'rsl_excerpt_more' );

/**
 * Disable the wpautop filter in excerpt
 */
remove_filter( 'the_excerpt', 'wpautop' );

/**
 * Disable transform symbols
 */
add_filter( 'run_wptexturize', '__return_false' );

/**
 * Covert "&#038;" back to "&"
 */
function rsl_the_title( $title, $id ) {
	$title = str_replace( '&#038;', '&', $title );
	return $title;
}
add_filter( 'the_title', 'rsl_the_title', 10, 2 );

/**
 * Append the cookie info and nonce on preview links
 */
function rsl_preview_post_link( $preview_link, $post ) {
	list($permalink) = get_sample_permalink( $post );

	$cookie = array_filter(
		$_COOKIE,
		function ( $k ) {
			return strpos( $k, 'wordpress_logged_in_' ) === 0;
		},
		ARRAY_FILTER_USE_KEY
	);
	$ck     = key( $cookie );
	$cv     = $cookie[ $ck ];
	$nonce  = wp_create_nonce( 'wp_rest' );

	$query_args = array(
		'ck'    => $ck,
		'cv'    => $cv,
		'nonce' => $nonce,
	);
	$new_link   = add_query_arg( $query_args, $permalink );
	return $new_link;
}
add_filter( 'preview_post_link', 'rsl_preview_post_link', 10, 2 );

/**
 * Update the preview link html output in post slug editor
 */
function rsl_get_sample_permalink_html( $return, $post_id, $new_title, $new_slug, $post ) {
	list($permalink) = get_sample_permalink( $post->ID, $new_title, $new_slug );
	$preview_link    = get_preview_post_link( $post );
	if ( in_array( $post->post_status, array( 'draft', 'future' ), true ) ) {
		/**
		 * To format <a href="{PREVIEW_LINK}">{PERMALINK}</a>
		 */
		$return = preg_replace(
			'/(<a id="sample-permalink" href=")[^"]+("[^>]*>)[^<]+(<\/a>)/',
			'$1' . esc_url( $preview_link ) . '$2' . $permalink . '$3',
			$return
		);
	}
	return $return;
}
add_filter( 'get_sample_permalink_html', 'rsl_get_sample_permalink_html', 10, 5 );
