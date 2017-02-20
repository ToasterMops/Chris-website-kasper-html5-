$("document").ready(function(){

/* ====================== */
/*  Text rotating settings
/* ====================== */

    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 3000
    });

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

    $(".fancybox").fancybox({
        padding: 0,

        openEffect : 'fade',
        openSpeed  : 500,

        closeEffect : 'fade',
        closeSpeed  : 250,

        helpers: {
            title: {
                type: 'over'
            },
        },
    });

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

/* ================== */
/*  Email form functionality
/* ================== */

    $('#msg-submit').click(function(){
    var inputs = $('#email-form input');
    var comments = $('#email-form textarea');
    var bodyStr = "";

    inputs.each(function(index, value){
        bodyStr += value.name + value.value + "%0A"
    });

    if (comments[0].value != ""){
        bodyStr += "%0A" + comments[0].value;
    };

    window.location = "mailto:ChristopherJiang@outlook.com?subject=Hey%20Chris&body=" + bodyStr;

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