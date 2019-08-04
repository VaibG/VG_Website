$(document).ready(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
    	preloadImages: false,
        lazy: true,
        pagination: {
        	el: '.swiper-pagination',
        },
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 10,
        keyboardControl: true,
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
        },
        observer: true, 
        observeParents: true
    })
  });