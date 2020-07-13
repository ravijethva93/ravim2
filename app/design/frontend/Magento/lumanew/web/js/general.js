define([
    "jquery",
    "jquery/ui"
],

function($) {
    "use strict";

	var $win = $(window);
	var $doc = $(document);
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	var $screensize = function(element){
		$(element).width($winW()).height($winH());
	};

	var screencheck = function(mediasize){
		if (typeof window.matchMedia !== "undefined"){
			var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
			if( screensize.matches ) {
				return true;
			}else {
				return false;
			}
		} else { // for IE9 and lower browser
			if( $winW() <=  mediasize ) {
				return true;
			}else {
				return false;
			}
		}
	};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/
		// Remove No-js Class
		$("html").removeClass('no-js').addClass('js');

		/* Get Screen size
		---------------------------------------------------------------------*/
		$win.on('load', function(){
			$win.on('resize', function(){
				$screensize('your selector');
			}).resize();
		});

		$(document).ready(function() {
          $('.form.subscribe button.subscribe').click(function() {
            alert('This is just a test');
            return false;
          });
        });

/*--------------------------------------------------------------------------------------------------------------------------------------*/
	});

    return;
});
