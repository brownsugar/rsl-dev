<?php

/**
 * Handle vote requests
 */
function rest_vote_handler( $request ) {
	require_once LIB_ROOT . DIRECTORY_SEPARATOR . 'class-vote.php';

	$handler = new Vote( $request );
	return $handler->init();
}
