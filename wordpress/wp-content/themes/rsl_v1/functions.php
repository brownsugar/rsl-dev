<?php

require_once 'inc/rest-rsl.php';
require_once 'inc/extends.php';
require_once 'inc/uploads.php';

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
