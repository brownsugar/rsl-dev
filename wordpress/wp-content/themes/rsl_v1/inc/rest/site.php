<?php

/**
 * Get site infos
 * https://developer.wordpress.org/reference/functions/get_bloginfo/
 */
function rest_site_handler( $request ) {
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
