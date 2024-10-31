jQuery(function($){
	function init() {
		change_visibility( $('#post-editing-toolbar-hide').prop('checked') );

		$('#post-editing-toolbar-hide').change(function(){
			change_visibility( $(this).prop('checked') );
		});

		$(window).resize(function(){
			$('#post-editing-toolbar').width( $('#wpbody').width() );
		});

		$(window).keypress(function(event){
			// Ctrl + S
			if ( event.ctrlKey && ( event.which == 115 ) ) {
				$('#publish').click();
				event.preventDefault();
				return false;
			}
			// Ctrl + D
			if ( event.ctrlKey && ( event.which == 100 ) ) {
				$('#delete-action a')[0].click();
				event.preventDefault();
				return false;
			}
			// Ctrl + Num 1
			if ( event.ctrlKey && ( event.which == 49 ) ) {
				$('.misc-pub-post-status a.edit-post-status')[0].click();
				event.preventDefault();
				return false;
			}
			// Ctrl + Num 2
			if ( event.ctrlKey && ( event.which == 50 ) ) {
				$('.misc-pub-visibility a.edit-visibility')[0].click();
				event.preventDefault();
				return false;
			}
			// Ctrl + Num 3
			if ( event.ctrlKey && ( event.which == 51 ) ) {
				$('.misc-pub-revisions a')[0].click();
				event.preventDefault();
				return false;
			}
			// Ctrl + Num 4
			if ( event.ctrlKey && ( event.which == 52 ) ) {
				$('.misc-pub-curtime a.edit-timestamp')[0].click();
				event.preventDefault();
				return false;
			}

			return true;
		});
	}

	function change_visibility(visible) {
		if ( visible ) {
			$('#post-editing-toolbar')
				.removeClass('postbox')
				.css({
					'width': $('#wpbody').width() + 'px',
					'right': '0px',
					'padding': '5px 10px',
					'background-color': $('#adminmenuwrap').css('background-color')
				});

			$('.pet-post-status').append( $('#misc-publishing-actions .misc-pub-post-status') );
			$('#post-editing-toolbar #post-status-select').hide();
			$('.pet-post-visibility').append( $('#misc-publishing-actions .misc-pub-visibility') );
			$('.pet-post-revisions').append( $('#misc-publishing-actions .misc-pub-revisions') );
			$('.pet-post-curtime').append( $('#misc-publishing-actions .misc-pub-curtime') );
			$('.pet-post-delete').append( $('#major-publishing-actions #delete-action') );
			$('.pet-post-publish').append( $('#major-publishing-actions #publishing-action') );
			
			$('#wpfooter, #submitdiv').hide();
		} else {
			$('#misc-publishing-actions').prepend( $('.pet-post-status .misc-pub-post-status') );
			$('#misc-publishing-actions').prepend( $('.pet-post-visibility .misc-pub-visibility') );
			$('#misc-publishing-actions').prepend( $('.pet-post-revisions .misc-pub-revisions') );
			$('#misc-publishing-actions').prepend( $('.pet-post-curtime .misc-pub-curtime') );
			$('#major-publishing-actions').prepend( $('.pet-post-delete #delete-action') );
			$('#major-publishing-actions').prepend( $('.pet-post-publish #publishing-action') );

			$('#wpfooter, #submitdiv').show();
		}
	}

	init();
});
