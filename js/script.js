$(document).ready(function(){
    $(".team-carousel").owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        autoplayTimeout: 2000,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });
});
$(document).ready(function(){
    $(".testimonials").owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        responsive: {
            320: {
                items: 1
            }
        }
    });
});