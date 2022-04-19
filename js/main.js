$(function () {
   'use strict';
    
    //slider height
    
    $("html").niceScroll();
    
    var winH      = $(window).height(),
        upperNavH = $(".upperNav").innerHeight(),
        navbarH   = $(".navbar").innerHeight();
    $(".slider, .carousel-item,.intro").height(winH - (upperNavH+navbarH));

    //shuffle img
    
    $('.featured-work ul li').on('click ', function (){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class')==='all')
            $('.shuffle-images .col-md').css('opacity', 1);
        else{
            $('.shuffle-images .col-md').css('opacity', '0.2');
            $($(this).data('class')).parent().css('opacity', 1);
        }
            
    });
    
});

$(window).on('load', function() { 
 $(".loading-overlay").fadeOut(2000);
});


