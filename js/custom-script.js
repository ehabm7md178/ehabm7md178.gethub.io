/*----------------------[Custom JS File]------------------------

    Project     : John Maechel One Page CV
    Version     : 1.0
    Author      : Ahmed Hamed
    Primary Use : CV

**-------------------------------------------------------------*/

/*global $, jQuery, console, alert*/
$(function () {
   
    'use strict';
    /* Cashing selectors and data in variables */
    var windowVar = $(window),
        home = $('.home'),
        loadPage = $('.load-page'),
        htmlBody = $('html, body'),
        navLi = $('.navbar ul li'),
        navLiFootLi = $('.navbar ul li, .foot .another-menu li a'),
        nav = $('.navbar'),
        navUl = $('.navbar ul'),
        projInfo = $('.projects .proj .overlay-proj .info-div'),
        mainForm = $('.main-form'),
        scrollTop = $('.scroll-top'),
        liColor = $('.options .li-co'),
        liLast = $('.options > li.last'),
        colorLi = $('.options .color-li'),
        colorDiv = $('.color'),
        i = 0;
        
    /* Trigger niceScroll. */
    $('html').niceScroll({
        cursorcolor : 'rgb(45, 45, 45)',
        cursorwidth : '10px',
        cursorborder : '1px solid rgb(45, 45, 45)',
        cursorborderradius : 0
    });
    
    /* Change the screen size when you resize the window */
    home.height(windowVar.height());
    loadPage.height(windowVar.height());
    windowVar.on('resize', function () {
        home.height(windowVar.height());
        loadPage.height(windowVar.height());
    });
    
    /* Activation chevron down button */
    $('.fa-angle-double-down').on('click', function () {
        htmlBody.animate({
            scrollTop : $('.about-me').offset().top
        }, 500);
    });
    
    /* Addition active class for the list[li] */
    navLi.on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    
    /* Activation navbar links when click on it */
    navLiFootLi.on('click', function () {
        htmlBody.animate({
            scrollTop : $('.' + $(this).data('value')).offset().top + 1
        }, 500);
    });
    
    /* moving class active between list[li] when working scroll to the window */
    windowVar.on("scroll", function () {
        navLi.each(function () {
            if ($("." + $(this).data("value")).offset().top <= windowVar.scrollTop()) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    });
    
    /* Show the navbar */
    windowVar.on('scroll', function () {
        if ($(this).scrollTop() >= 670) {
            nav.fadeIn();
        } else {
            nav.fadeOut(100);
        }
    });
    
    /* Show the menu in the mobile and tablets */
    if (windowVar.width() < 798) {
        $('.navbar .bars').on('click', function () {
            navUl.slideToggle();
        });
        navLi.on('click', function () {
            navUl.slideUp();
        });
    }
    
    /* Show the hover on my projects */
    $('.projects .proj').hover(function () {
        $('.' + $(this).data('value')).fadeIn(300);
        projInfo.delay(200).slideDown();
    }, function () {
        $('.' + $(this).data('value')).fadeOut(300);
        projInfo.slideUp(-100);
    });
    
    /* Private With Projects Links */
    $('.overlay-proj i.fa-link').on('click', function () {
        $(this).css('transform', 'scale(1)');
    });
    
    /* trigger muxItUp */
    $('#container').mixItUp();
    
    $('.projects ul li').on('click', function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
    });
    
    /* show the hover on my Images */
    $('.picture').hover(function () {
        $('.' + $(this).data('value')).fadeIn(300);
    }, function () {
        $('.' + $(this).data('value')).fadeOut(300);
    });
    
    /* Show contact section elements */
    $('.mail').on('click', function () {
        $(this).fadeOut(100);
        mainForm.animate({
            width : '90%'
        }, 700);
        mainForm.animate({
            height : '87%',
            marginTop : '9%',
            overflow : 'hidden'
        }, 800, function () {
            $('.main-form > h2').fadeIn();
            $('.main-form > form').fadeIn();
            $('.main-form > form input.text-con').delay(200).fadeIn();
            $('.main-form > form input.email-con').delay(400).fadeIn();
            $('.main-form > form textarea').delay(600).fadeIn();
            $('.main-form > form button').delay(800).fadeIn();
        });
    });
    
    /* Trigger magnificPopup */
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
      // other options
    });
    
    /* show scrollTop button */
    windowVar.on('scroll', function () {
        if ($(this).scrollTop() >= 800) {
            scrollTop.fadeIn(300);
        } else {
            scrollTop.fadeOut(300);
        }
    });
    
    /* Activation scrollTop button */
    scrollTop.on('click', function () {
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });
    
    /* Activation page loader */
    windowVar.on('load', function () {
        $('.load-page .load-one ').fadeOut(1000, function () {
            $(this).parent('.load-page').fadeOut(1000);
        });
    });

    
    /* Show Website Colors */
    colorLi.on('click', function () {
        liColor.eq(5).fadeIn();
        liColor.eq(4).delay(100).fadeIn();
        liColor.eq(3).delay(200).fadeIn();
        liColor.eq(2).delay(300).fadeIn();
        liColor.eq(1).delay(400).fadeIn();
        liColor.eq(0).delay(500).fadeIn();
        $(this).fadeOut(-200);
        colorDiv.fadeIn(-200);
        liLast.css('marginBottom', '60px');
    });
    
    /* Hidden Website Colors */
    colorDiv.on('click', function () {
        for (var i = 0; i <= 5; i++) {
            liColor.eq(i).delay(i + '00').fadeOut();
        }
        $(this).fadeOut(-200);
        colorLi.fadeIn(-200);
        liLast.css('marginBottom', '0');
    });

    /* change the colors */
    $('ul.options li').on('click', function () {
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });
});



/* Trigger typed.js */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    Typed.new('.element', {
        strings: [
            "I Am A UI Designer.",
            "I Am A Graphic Designer.",
            "I Am A Front-End Web Developer.",
            "I Am A Back-End Web Developer.",
            "I Am A Mobile Applications Developer."],
        typeSpeed: 10
    });
});




