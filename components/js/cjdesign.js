$("document").ready(function(){

/* ====================== */
/*  Circle logo dynamic resizing
/* ====================== */
    title_heights();
    
    $( window ).resize(function() {
      title_heights();
    });

    function title_heights() {
        var cjlogo_width = $('#cjlogo').width();
        $('#cjlogo').css({'height':cjlogo_width+'px'});
    }
    

/* ====================== */
/*  Menu item highlighting
/* ====================== */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 300) {
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
    // portfolio filtering

    $("#projects").mixItUp();

    //fancybox

    $(".fancybox-template").fancybox({
        arrows : false,
        openEffect : 'fade',
        openSpeed  : 500,
        closeEffect : 'fade',
        closeSpeed  : 250,
        fitToView   : false,
        width       : '90%',
        height      : '100%',
        autoSize    : false,
        closeClick  : false,
        scrolling  : false,
    });

    gallery_heights();
    
    $( window ).resize(function() {
      gallery_heights();
    });

    function gallery_heights() {
        var gallery_width = $("#gallery").width();
        $('#gallery .template-wrapper').css({'width':(gallery_width/3-3)+'px'});
        $('#gallery img').css({'width':(gallery_width/3-3)+'px'});
    }

/* ================== */
/*  On scroll fade/bounce effect
/* ================== */

    $("#testimonial").owlCarousel({
        pagination : true, // Show bullet pagination
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        navigation: true,
    });
});

/* ================== */
/*  Starting Wow effects
/* ================== */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
    });
    wow.init();