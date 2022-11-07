$("document").ready(function () {
    AOS.init();
    const swiper = new Swiper(".swiper",{
        autoplay:{
            delay: 3000
        },
        loop: true,
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination:{
            el:".swiper-pagination",
            clickable: true
        },
        centeredSlides: true,
        freeMode: true
    })
    const swiper2 = new Swiper(".swiper2",{
        autoplay:{
            delay: 3000
        },
        loop: true,
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination:{
            el:".swiper-pagination",
            clickable: true
        },
        centeredSlides: true,
        freeMode: true
    })
    
    $('.best-content-wrap .best-content-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    $(".best ul li").eq(0).addClass("on")
    $(".best ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".best ul li").removeClass("on").eq(i).addClass("on")
        $(".best-content-wrap .best-content-slick").hide().eq(i).show().slick('setPosition');
    })

    $(".evt .indicator ul li").eq(0).addClass("on")
    $(".evt .indicator ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".evt .indicator ul li").removeClass("on").eq(i).addClass("on")
        $(".evt .indicator ul li").eq(0).addClass("on")
		$(".evt .indicator ul li").removeClass("on").eq(i).addClass("on")
		$(".evt > ul").stop().animate({
			marginLeft: -100 * i + "%"
		}, 500)
    })

    $(".evt .indicator ul li").removeClass("on").eq(0).addClass("on")


    $(".btn, .window").click(function(){
        if(!$(".window-content").is(":visible")){
            $(".nav").toggleClass("on")
            $(".btn").toggleClass("on")
            $(".window").fadeToggle()
        }
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".up-btn").fadeIn();            
        } else {
            $(".up-btn").fadeOut();
        }
    });
    
    $(".up-btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
    $(".up-btn").css("display","none");
});