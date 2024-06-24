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


    var sync1 = $(".slider");
    var sync2 = $(".navigation-thumbs");

    var thumbnailItemClass = '.owl-item';

    var slides = sync1.owlCarousel({
        video:true,
        startPosition: 12,
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
        nav: false,
        dots: true
    }).on('changed.owl.carousel', syncPosition);

    function syncPosition(el) {
        $owl_slider = $(this).data('owl.carousel');
        var loop = $owl_slider.options.loop;

        if(loop){
            var count = el.item.count-1;
            var current = Math.round(el.item.index - (el.item.count/2) - .5);
            if(current < 0) {
                current = count;
            }
            if(current > count) {
                current = 0;
            }
        }else{
            var current = el.item.index;
        }

        var owl_thumbnail = sync2.data('owl.carousel');
        var itemClass = "." + owl_thumbnail.options.itemClass;


        var thumbnailCurrentItem = sync2
            .find(itemClass)
            .removeClass("synced")
            .eq(current);

        thumbnailCurrentItem.addClass('synced');

        if (!thumbnailCurrentItem.hasClass('active')) {
            var duration = 300;
            sync2.trigger('to.owl.carousel',[current, duration, true]);
        }
    }

    var thumbs = sync2.owlCarousel({
        startPosition: 12,
        items:6,
        loop:false,
        margin:10,
        autoplay:false,
        nav: true,
        dots: false,
        onInitialized: function (e) {
            var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
            thumbnailCurrentItem.addClass('synced');
        },
    })
        .on('click', thumbnailItemClass, function(e) {
            e.preventDefault();
            var duration = 300;
            var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
            sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
        }).on("changed.owl.carousel", function (el) {
            var number = el.item.index;
            $owl_slider = sync1.data('owl.carousel');
            $owl_slider.to(number, 100, true);
        });

})