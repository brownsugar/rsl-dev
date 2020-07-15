<?php

/**
 * Add shortcode [iframe src=""]
 */
function rsl_sc_iframe( $attrs ) {
	if ( isset( $attrs['src'] ) ) {
		return '<iframe src="' . $attrs['src'] . '"></iframe>';
	}
	return '';
}
add_shortcode( 'iframe', 'rsl_sc_iframe' );
