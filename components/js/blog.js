$("document").ready(function(){

/* ====================== */
/*  Menu item highlighting
/* ====================== */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 100) {
            jQuery("#navigation").css("background-color","#38867d");
            jQuery("#navigation").addClass("animated-nav");
        } else {
            jQuery("#navigation").css("background-color","transparent");
            jQuery("#navigation").removeClass("animated-nav");
        }
    });

    $('#nav').onePageNav({
	    filter: ':not(.external)',
	    scrollSpeed: 950,
	    scrollThreshold: 1
	});

});

//fancybox

$(".fancybox-template").fancybox({
    arrows : false,
    openEffect : 'fade',
    openSpeed  : 500,
    closeEffect : 'fade',
    closeSpeed  : 250,
    fitToView   : false,
    width       : '80%',
    height      : '100%',
    autoSize    : false,
    closeClick  : false,
    scrolling  : 'visible',
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,.85)'
            }
        }
    }
});
