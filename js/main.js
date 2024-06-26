$(function(){
    $('.banner').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: false,
        responsive: {
            0:{
                nav:false,
                dots:true
            },

            1024:{
                nav:false,
                dots:true
            },
            1300:{
                nav:true,
                dots:false
            }

        }
    })
    $('.portfolio-view-photos').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: false,
        lazyLoad:true,
    })
    $('.team-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false,
        lazyLoad:true,
    })
    $('.top-sale-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false,
        responsive: {
            0:{
                items:1,
                nav:false,
                dots: true

            },
            700:{
                items: 1,
                nav:false,
                dots: true
            },
            900:{
                items:2,
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
            1440: {
                nav:false
            },
            1600: {
                nav:false
            },


        }
    })
    $('.review-list').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 3,
        dots: false,
        responsive: {
            0:{
                items: 1,
                nav:false,
                dots: true

            },
            700:{
                items: 1,
                nav:false,
                dots: true
            },
            900:{
                items:2,
                nav:false
            },
            1024:{
                items:2,
                nav:false
            },
            1300:{
                items:3,
                nav:false
            },
            1440: {
                nav:false
            },
            1600: {
                nav:false
            }
        }
    })


    $('.burger-btn').on('click',function (){
        $('.burger-btn').hide();
        $('.burger-btn-close').show();
        $('nav').show().addClass('opened');
        $('.navbar-top').show().addClass('opened');
        $('.header-content').show().addClass('opened');
        $('.header-menu').show();
        $('body').addClass('no-scroll')

    })
    $('.burger-btn-close').on('click',function (){
        $('.burger-btn').show();
        $('.burger-btn-close').hide();
        $('nav').hide().removeClass('opened');
        $('.navbar-top').hide().removeClass('opened');
        $('.header-content').hide().removeClass('opened');
        $('.header-menu').hide();
        $('body').removeClass('no-scroll')


    });
    $('.mobile-header-right .search-btn').on('click',function (e){
        e.preventDefault();
        $('.mobile-header-right form').addClass('opened')
    })
    $('.menu-catalog').on('click',function (e){
        e.preventDefault();
        if($(this).hasClass('selected')){
            $('.dropdown').removeClass('opened');
            $(this).removeClass('selected')
        } else{
            $('.dropdown').addClass('opened');
            $(this).addClass('selected')
        }

    })



})