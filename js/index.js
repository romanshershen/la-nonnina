$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .mobile_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $('.first-slider').slick({
        slidesToShow: 1
    });
    $('.second_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                
                     }
            }]
    });
    $('.rev_slider').slick({
        slidesToShow: 1
    });
    $('.ins_slider_1').slick({
        slidesToShow: 1,
        asNavFor: ".ins_slider_2"
        
        
    });
    $('.ins_slider_2').slick({
        slidesToShow: 7,
        asNavFor: ".ins_slider_1",
        arrows: false,
        // responsive: [
        //     {
        //       breakpoint: 940,
        //       settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 1
                
        //              }         
        //     }],
            responsive: [
                {
                  breakpoint: 940,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                         }         
                }]
    });



});