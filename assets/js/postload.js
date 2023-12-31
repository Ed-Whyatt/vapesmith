/* jshint esversion: 11, jquery: true */
// Owl Carousel start function.
// Docs: https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 2,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
});

// Owl Carousel start function.
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });