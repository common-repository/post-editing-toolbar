<?php
class PostEditingToolbar {
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array($this, 'load_resources') );
		add_action( 'add_meta_boxes', array($this, 'toolbar_register') );
	}

	public function load_resources($hook_suffix) {
		if ( $hook_suffix !== 'post.php' )
			return false;

		wp_register_style('post_editing_toolbar_css', POST_EDITING_TOOLBAR_PLUGIN_URL.'res/css/pet.css', false, '0.1');
		wp_enqueue_style('post_editing_toolbar_css');

		wp_register_script( 'post_editing_toolbar_js', POST_EDITING_TOOLBAR_PLUGIN_URL.'res/js/pet.js', array('jquery'), '0.1' );
		wp_enqueue_script('post_editing_toolbar_js');
	}

	public function toolbar_register() {
		add_meta_box(
				'post-editing-toolbar',
				'Post Editing Toolbar',
				array($this, 'display_toolbar')
		);
	}

	public function display_toolbar($post) {
		?>
		<div class="pet-post-status pet-block"></div>
		<div class="pet-post-visibility pet-block"></div>
		<div class="pet-post-revisions pet-block"></div>
		<div class="pet-post-curtime pet-block"></div>
		<div class="pet-post-delete pet-block"></div>
		<div class="pet-post-publish pet-block"></div>
		<?php
	}
}
