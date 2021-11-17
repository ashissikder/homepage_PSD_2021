$(document).ready(function(){
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

    // portfolio active
    $('#portfolio-bg .portfolio ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // fortfolio venobox
    $('.venobox').venobox({
        closeColor:'#d22222',
        arrowsColor:'#0066e7',
        spinner:'cube-grid',
        spinColor:'#00bbff',
    }); 
})