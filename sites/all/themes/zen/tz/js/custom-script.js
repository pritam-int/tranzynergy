// JavaScript Document

// Header Slider
jQuery(document).ready(function() {
    jQuery('#slider').cycle({
		fx: 'scrollHorz',
			timeout: 5000,
			prev:  	'#prev', 
			next:  	'#next',
			pager: 	'#snav',
			pause: 	'pause on hover'
	});
});

jQuery(document).ready(function(){
	jQuery('.navigation ul li a').append('<span>');
})
