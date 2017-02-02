$(document).ready(function() {

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 0
    });

    var partnersSlider = new Swiper('.partners .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 6,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            780: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0
            }
        }
    });

    var workTestimonials = new Swiper('.work-testimonials .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1
    });

    //scroll
    function scroll() {
        var navBar = $('#navbar');
        var scrTop = $(window).scrollTop();

        if (scrTop >= 10) {
            navBar.addClass('fixed');
        } else {
            navBar.removeClass('fixed');
        }

        $(window).scroll(function() {
            var scrTop = $(window).scrollTop();
            if (scrTop >= 10) {
                navBar.addClass('fixed');
            } else {
                navBar.removeClass('fixed');
            }
        });

    }
    scroll();


});