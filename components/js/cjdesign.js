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

    gallery_heights();
    
    $( window ).resize(function() {
      gallery_heights();
    });

    function gallery_heights() {
        var gallery_width = $("#gallery").width();
        $('#gallery .template-wrapper').css({'width':(gallery_width/3-3)+'px'});
        $('#gallery .btn-img').css({'width':(gallery_width/3-3)+'px'});
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

/* ================== */
/*  Email form functionality
/* ================== */

    $('#msg-submit').click(function(){
    var inputs = $('#email-form input');
    var comments = $('#email-form textarea');
    var bodyStr = "";

    inputs.each(function(index, value){
        if (value.name != "Subject: ")
            bodyStr += value.name + value.value + "%0A" + "%0A"
    });

    if (comments[0].value != ""){
        bodyStr += "%0A" + comments[0].value;
    };

    window.location = "mailto:ChristopherJiang@outlook.com?subject=" + inputs[1].value + "&body=" + bodyStr;

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