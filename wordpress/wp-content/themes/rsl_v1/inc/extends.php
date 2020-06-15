<?php

/**
 * Add feature image support
 */
add_theme_support( 'post-thumbnails' );

/**
 * Add site menu support
 */
register_nav_menus(
	array(
		'primary-menu' => __( '頭部選單' ),
	)
);
