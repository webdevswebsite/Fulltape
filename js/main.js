$(document).ready(function () {
    'use strict';

    //********* Animated Headline

    $('.animate-rotate-3').animatedHeadline({
        animationType: 'zoom'
    });

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu,a.custom-btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });
    
    
    //************ Venobox
    
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    
    

    //*************counter-up js

    $('.counter').counterUp({
        delay: 50,
        time: 8000
    });


    //************* Owl Carousel

    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    //**** con right accordion
    
    
    var $active = $("#con-right-accordion .panel-collapse.in")
        .prev()
        .addClass("active");

    $active
        .find("a")
        .append("<span class=\"fa fa-minus pull-left\"></span>");

    $("#con-right-accordion .panel-heading")
        .not($active)
        .find('a')
        .prepend("<span class=\"fa fa-plus pull-left\"></span>");

    $("#con-right-accordion").on("show.bs.collapse", function (e) {
        $("#con-right-accordion .panel-heading.active")
            .removeClass("active")
            .find(".fa")
            .toggleClass("fa-plus fa-minus");
        $(e.target)
            .prev()
            .addClass("active")
            .find(".fa")
            .toggleClass("fa-plus fa-minus");
    });

    $("#con-right-accordion").on("hide.bs.collapse", function (e) {
        $(e.target)
            .prev()
            .removeClass("active")
            .find(".fa")
            .removeClass("fa-minus")
            .addClass("fa-plus");
    });

    



});
