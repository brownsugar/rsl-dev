<?php

// Add rsl/v1 endpoint
add_action( 'rest_api_init', function () {
  register_rest_route( 'rsl/v1', '/site', [
    'methods' => 'GET',
    'callback' => 'get_site_info',
  ] );
} );

// Get site infos
function get_site_info( $request ) {
  $fields = [
    'name',
    'description',
    'wpurl',
    'url',
    'admin_email',
    'charset',
    'language',
    'rss_url',
    'rss2_url'
  ];

  $data = [];
  foreach ($fields as $field) {
    $data[$field] = get_bloginfo($field);
  }

  return $data;
}
