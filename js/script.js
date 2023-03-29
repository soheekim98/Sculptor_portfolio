$(document).ready(function(){
    // var swiper = new Swiper(".mySwiper", {
    //     direction: "vertical",
    //     loop: true,
    //     speed:2500,
    //     // touchRatio: 0,
    //     resistance : false,
    //     allowTouchMove : false,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },

    // });
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1500){
            var swiper = new Swiper(".mySwiper", {
                direction: "vertical",
                loop: true,
                speed:2000,
                // touchRatio: 0,
                resistance : false,
                allowTouchMove : false,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            });
        }else{
            
        }
    };

    $('.btn li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const result = $(this).attr('data-alt');

        $('.tabs > div').removeClass('active');
        $(`#${result}`).addClass('active');

    });

    $('.nav-wrap').click(function(){
        $(this).toggleClass('active');
    });
    $('.section-wrap').click(function(){
        $('.nav-wrap').removeClass('active');
    });


});//end
