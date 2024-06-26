// (function(window){var home=document.getElementById('home');var menuButton=document.getElementById('menu'),$overlay=$('#overlay'),$logoButton=$('.logo');$menu=$('#menu-container'),menuBool=false;var $homeButton=$('#homeButton'),$aboutButton=$('#aboutButton'),$skillButton=$('#skillButton'),$portfolioButton=$('#portfolioButton'),$funButton=$('#funButton'),$feedbackButton=$('#feedbackButton'),$contactButton=$('#contactButton');var $aboutSection=$('#about-section'),$skillsSection=$('#skills-section'),$portfolioSection=$('#portfolio-section'),$funSection=$('#fun-section'),$feedbackSection=$('#feedback-section'),$contactSection=$('#contact-section');var $scrollButton=$('#scroll'),$scrollIcon=$('#scroll-icon');$(function(){$(".typed-text").typed({strings:["Hello World","I'm Ali Mzayhem","I'm a UI/UX Designer","UX Consultant","and a Front-End Engineer"],typeSpeed:70,loop:true,loopCount:false});});var display=function(section){var barHeight=document.getElementById('head-bar').offsetHeight;$('html, body').animate({scrollTop:section.offset().top-barHeight},1000);};$overlay.addClass('hide');var hide=function(){if(menuBool===true){$menu.animate({right:"-300"},200);$overlay.fadeOut(200,function(){$overlay.removeClass('show');$overlay.addClass('hide');});menuBool=false;$('body').removeClass('stop-scroll');$('body').unbind('touchmove');}}
// menuButton.onclick=function(){if(menuBool===false){$menu.animate({right:"0"},200);$overlay.animate({opacity:0.6},200);$overlay.removeClass('hide');$overlay.addClass('show');menuBool=true;$('body').addClass('stop-scroll');$('body').bind('touchmove',function(e){e.preventDefault()});}};$logoButton.click(function(){display($('.cover'));});$overlay.click(function(){hide();});$scrollButton.click(function(){display($aboutSection);$scrollIcon.removeClass('animated');});$homeButton.click(function(){display($('.cover'));hide();});$aboutButton.click(function(){display($aboutSection);hide();});$skillButton.click(function(){display($skillsSection);hide();});$portfolioButton.click(function(){display($portfolioSection);hide();});$funButton.click(function(){display($funSection);hide();});$feedbackButton.click(function(){display($feedbackSection);hide();});$contactButton.click(function(){display($contactSection);hide();});var $window=$(window),$avatar=$('.avatar'),$imgContainer=$('.img-container');$window.resize(function resize(){if($window.width()<767){return $avatar.addClass('img-fluid'),$imgContainer.removeClass('pr-2').addClass('p-0');}$avatar.removeClass('img-fluid');$imgContainer.removeClass('p-0').addClass('pr-2');}).trigger('resize');$('.skillbar').each(function(){$(this).appear(function(){$(this).find('.title').animate({opacity:1},1000);$(this).find('.count-bar').animate({width:$(this).attr('data-percent')},2000);var percent=$(this).attr('data-percent');$(this).find('.count').html('<span>'+percent+'</span>');});});$(function(){$("input,textarea").not("[type=submit]").jqBootstrapValidation();});var getYear=function(){var today=new Date(),year=today.getFullYear();return year;}
// $(document).find('#year').html('<span>'+getYear()+'</span>');})(window);
(function(window) {
    var home = document.getElementById('home');
    var menuButton = document.getElementById('menu'),
        $overlay = $('#overlay'),
        $logoButton = $('.logo');
        $menu = $('#menu-container'),
        menuBool = false;

    var $homeButton = $('#homeButton'),
        $aboutButton = $('#aboutButton'),
        $skillButton = $('#skillButton'),
        $portfolioButton = $('#portfolioButton'),
        $funButton = $('#funButton'),
        $feedbackButton = $('#feedbackButton'),
        $contactButton = $('#contactButton'),
        $courseButton = $('#courseButton'); // New Course Button

    var $aboutSection = $('#about-section'),
        $skillsSection = $('#skills-section'),
        $portfolioSection = $('#portfolio-section'),
        $funSection = $('#fun-section'),
        $feedbackSection = $('#feedback-section'),
        $contactSection = $('#contact-section'),
        $courseSection = $('#course-section'); // New Course Section

    var $scrollButton = $('#scroll'),
        $scrollIcon = $('#scroll-icon');

    $(function() {
        $(".typed-text").typed({
            strings: ["Hello World", "I'm Ali Mzayhem", "I'm a UI/UX Designer", "UX Consultant", "and a Front-End Engineer"],
            typeSpeed: 70,
            loop: true,
            loopCount: false
        });
    });

    var display = function(section) {
        var barHeight = document.getElementById('head-bar').offsetHeight;
        $('html, body').animate({
            scrollTop: section.offset().top - barHeight
        }, 1000);
    };

    $overlay.addClass('hide');

    var hide = function() {
        if (menuBool === true) {
            $menu.css("right", "-300px");
            $overlay.fadeOut(200, function() {
                $overlay.removeClass('show');
                $overlay.addClass('hide');
            });
            menuBool = false;
            $('body').removeClass('stop-scroll');
            $('body').unbind('touchmove');
        }
    }

    menuButton.onclick = function() {
        if (menuBool === false) {
            $menu.css("right", "0");
            $overlay.fadeIn(200);
            $overlay.removeClass('hide');
            $overlay.addClass('show');
            menuBool = true;
            $('body').addClass('stop-scroll');
            $('body').bind('touchmove', function(e) {
                e.preventDefault()
            });
        } else {
            hide();
        }
    };

    $overlay.click(function() {
        hide();
    });

    $logoButton.click(function() {
        display($('.cover'));
    });

    $scrollButton.click(function() {
        display($aboutSection);
        $scrollIcon.removeClass('animated');
    });

    $homeButton.click(function() {
        display($('.cover'));
        hide();
    });

    $aboutButton.click(function() {
        display($aboutSection);
        hide();
    });

    $skillButton.click(function() {
        display($skillsSection);
        hide();
    });

    $portfolioButton.click(function() {
        display($portfolioSection);
        hide();
    });

    $funButton.click(function() {
        display($funSection);
        hide();
    });

    $feedbackButton.click(function() {
        display($feedbackSection);
        hide();
    });

    $contactButton.click(function() {
        display($contactSection);
        hide();
    });

    $courseButton.click(function() { // New Course Button Click Event
        display($courseSection);
        hide();
    });

    var $window = $(window),
        $avatar = $('.avatar'),
        $imgContainer = $('.img-container');

    $window.resize(function resize() {
        if ($window.width() < 767) {
            return $avatar.addClass('img-fluid'),
                   $imgContainer.removeClass('pr-2').addClass('p-0');
        }
        $avatar.removeClass('img-fluid');
        $imgContainer.removeClass('p-0').addClass('pr-2');
    }).trigger('resize');

    $('.skillbar').each(function() {
        $(this).appear(function() {
            $(this).find('.title').animate({opacity: 1}, 1000);
            $(this).find('.count-bar').animate({width: $(this).attr('data-percent')}, 2000);
            var percent = $(this).attr('data-percent');
            $(this).find('.count').html('<span>' + percent + '</span>');
        });
    });

    $(function() {
        $("input,textarea").not("[type=submit]").jqBootstrapValidation();
    });

    var getYear = function() {
        var today = new Date(),
            year = today.getFullYear();
        return year;
    }
    $(document).find('#year').html('<span>' + getYear() + '</span>');

})(window);
