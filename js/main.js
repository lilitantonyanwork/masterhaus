$(function(){
    $('.banner').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: false
    })
    $('.top-sale-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false,
        responsive: {
            1600: {
                nav:false
            },
            1440: {
                nav:false
            },
            1300:{
                items:3,
                nav:false
            },
            1024:{
                items:2,
                nav:false
            },
            0:{
                items:3,
                nav:false

            }
        }
    })
    $('.review-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 3,
        dots: false,
        responsive: {
            1600: {
                nav:false
            },
            1440: {
                nav:false
            },
            1300:{
                items:3,
                nav:false
            },
            1024:{
                items:2,
                nav:false
            },
            0:{
                nav:false

            }
        }
    })
})