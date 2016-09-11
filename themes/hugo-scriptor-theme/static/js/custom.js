/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
	"use strict";

	$(document).ready(function(){

		// Responsive video embeds
		$('.post-content').fitVids();

		// Back To Top link
		$('#back-to-top').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});

		// Navigation
		$('#menu-toggle').click(function(){
			var _this = $(this);
			_this.toggleClass('toggled-on').attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
			$('.menu').slideToggle();
		});
		$(window).bind('resize orientationchange', function() {
			if ( $('#menu-toggle').is(':hidden') ) {
				$('#menu-toggle').removeClass('toggled-on').attr('aria-expanded', 'false');
				$('.menu').removeAttr('style');
			}
		});

	});

}(jQuery));
