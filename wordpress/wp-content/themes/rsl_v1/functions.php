<?php

require_once 'inc/rest-rsl.php';
require_once 'inc/extends.php';
require_once 'inc/uploads.php';
require_once 'inc/shortcode.php';
require_once 'inc/acf.php';

/**
 * Improve oembed feature
 */
function rsl_embed_oembed_html( $cache, $url, $attr, $post_ID ) {
	if ( strpos( $url, 'imgur.com' ) !== false ) {
		/**
		 * Do not embed imgur images
		 */
		return '<a href="' . $url . '" target="_blank">' . $url . '</a>';
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
	return ' ...';
}
add_filter( 'excerpt_more', 'rsl_excerpt_more' );

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
