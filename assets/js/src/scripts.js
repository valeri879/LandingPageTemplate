$(document).ready(function() {

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100
    });

    var partnersSlider = new Swiper('.partners .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 6
    });

    var workTestimonials = new Swiper('.work-testimonials .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1
    });


});