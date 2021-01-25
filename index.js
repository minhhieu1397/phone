$(document).ready(function() {
    //banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items:1,
        loop: true
    })

    $("#top-sale .owl-carousel").owlCarousel({
        dots: false,
        items:1,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    //fitter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    })

    //new phone owl carouse
    $("#new-phones .owl-carousel").owlCarousel({
        dots: true,
        items:1,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    //blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        dots: true,
        items:1,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })
})