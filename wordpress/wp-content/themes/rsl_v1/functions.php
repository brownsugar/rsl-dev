<?php

require_once 'inc/rest-rsl.php';

/**
 * 自訂 wp-json API 路徑
 */
function rsl_rest_url_prefix( $slug ) {
	return 'api';
}
add_filter( 'rest_url_prefix', 'rsl_rest_url_prefix' );

/**
 * 增加文章特色圖片支援
 */
add_theme_support( 'post-thumbnails' );

/**
 * 增加選單支援
 */
// register_nav_menus(
// 	array(
// 		'primary-menu' => __( '頭部選單' ),
// 	)
// );
