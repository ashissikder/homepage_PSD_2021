$(document).ready(function(){

    // portfolio active
    $('#portfolio-bg .portfolio ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // pageup button
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        if(scrolling > 500){
            $('.arrow').fadeIn();
        }else{
            $('.arrow').fadeOut();
        }

        // menu-fix
        if(scrolling>60){
            $('.menu-bg').addClass('menu-fix');
        }else{
            $('.menu-bg').removeClass('menu-fix');
        }
    });
    // menu active
    $(".menu-bg .menu .menu-list ul li").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.arrow').on('click',function(){
        $('html,body').animate({
            scrollTop:'0px',
        },1500);
    })


    // service slick plugIn
    $('.service').slick({
        arrows:false,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        autoplay:true,
        speed:300,
    });

    // portfolio filter plugIn
    var mixer = mixitup('.filter');

    // fortfolio venobox
    $('.venobox').venobox({
        closeColor:'#d22222',
        arrowsColor:'#0066e7',
        spinner:'cube-grid',
        spinColor:'#00bbff',
    }); 

    // work typed plugIn
    var typed = new Typed('.typed', {
        strings: ['Browse All'],
        loop:true, 
        typeSpeed:200,
        backSpeed:150,
        backDelay: 400,
    });
    // hire me typed plugIn
    var typed = new Typed('.hire', {
        strings: ['hire me'],
        loop:true, 
        typeSpeed:200,
        backSpeed:150,
        backDelay: 400,
    });
    // counter plugIn added
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
    });
    // testimonial wow
    new WOW().init();
    // tilt effect
    $('.img').tilt();
})