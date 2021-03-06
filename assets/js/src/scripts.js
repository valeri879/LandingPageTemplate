$(document).ready(function() {

    var mySwiper = new Swiper('.main .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        nextButton: '.main .swiper-button-next',
        prevButton: '.main .swiper-button-prev',
    });

    var testimonials = new Swiper('.testimonials .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        nextButton: '.testimonials .swiper-button-next',
        prevButton: '.testimonials .swiper-button-prev',
    });

    var partnersSlider = new Swiper('.partners .swiper-container', {
        speed: 400,
        spaceBetween: -40,
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
        },
        nextButton: '.partners .swiper-button-next',
        prevButton: '.partners .swiper-button-prev',
    });

    var workTestimonials = new Swiper('.works-testimonials .swiper-container', {
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

    // counter up plugin

    $('.counters .value').counterUp({
        delay: 10,
        time: 1000
    });


    //smoothscroll
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});