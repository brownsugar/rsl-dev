<?php

/**
 * Different upload path base on post type
 */
function rsl_upload_dir( $uploads ) {
	$id = isset( $_REQUEST['post_id'] ) ? intval( wp_unslash( $_REQUEST['post_id'] ) ) : '';
	if ( $id ) {
		$type = get_post_type( $id );
		$dir  = 'post' === $type ? 'news' : $type;

		$uploads['subdir'] = '/' . $dir . $uploads['subdir'];
		$uploads['path']   = $uploads['basedir'] . $uploads['subdir'];
		$uploads['url']    = $uploads['baseurl'] . $uploads['subdir'];
	}
	return $uploads;
}
add_filter( 'upload_dir', 'rsl_upload_dir' );

/**
 * Append hash on uploaded filename
 */
function rsl_sanitize_file_name( $filename ) {
	$file = pathinfo( $filename );
	$name = $file['filename'];
	$ext  = $file['extension'] ? '.' . $file['extension'] : '';

	if ( empty( $name ) ) {
		return $filename;
	}

	$hash = md5( time() . '_' . $filename );
	return $name . '_' . $hash . $ext;
}
add_filter( 'sanitize_file_name', 'rsl_sanitize_file_name' );
