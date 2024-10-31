<?php
/**
 * @package Post Editing Toolbar
 */
/*
Plugin Name: Post Editing Toolbar
Description: Toolbar for post editing screen.
Version: 0.2.1
Author: glutaminefree
Author URI: http://rgbcolors.ru
*/

// Make sure we don't expose any info if called directly
if ( !function_exists('add_action') )
	die('Hi there!  I\'m just a plugin, not much I can do when called directly.');

define('POST_EDITING_TOOLBAR_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('POST_EDITING_TOOLBAR_PLUGIN_URL', plugin_dir_url(__FILE__));

require(POST_EDITING_TOOLBAR_PLUGIN_PATH.'post-editing-toolbar-class.php');

$PostEditingToolbar = new PostEditingToolbar;
