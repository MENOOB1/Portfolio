let name = document.querySelector(".navbar-brand")
$(document).ready(function () {

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                    name.textContent = "ROHIT";
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                    name.textContent = "";

                }
            })
        }
    }

    navbarFixed();
    $(".home").click(function() {
        $('html, body').animate({
            scrollTop: $(".header_area").offset().top,
            
        }, 1000);
    });
    $(".project").click(function() {
        $('html, body').animate({
            scrollTop: $(".project-area").offset().top,
            
        }, 1000);
    });
    $(".about").click(function() {
        $('html, body').animate({
            scrollTop: $(".about-area").offset().top,
            
        }, 1000);
    });
    $(".contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top,
            
        }, 1000);
    });

});
