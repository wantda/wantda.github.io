$("document").ready(function () {
    AOS.init();
    new WOW({
        animateClass: "animate__animated"
    }).init();
    $(".header .menu p").click(function (e) { 
        e.preventDefault();
        $(".header .menu p").toggleClass("on");
        $(".header .menu ul").toggleClass("on")
    });

    const swiper = new Swiper(".swiper.right",{
        autoplay:{
            disableOnInteraction: false, 
            delay: 3000
        },
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides : 1,
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination:{
            el:".swiper-pagination",
            clickable: true,
            renderBullet: function (index, indicator) {
                return '<span class="' + indicator + '">' + (index + 1) + "</span>";
            }
        },
        centeredSlides: true,
        freeMode : false,
        spaceBetween:0,
        breakpoints:{
            640:{freeMode: false, slidesPerView: 1},
            1024:{slidesPerView: 1},
            1400:{slidesPerView: 1}
        }
    })

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos > $(".best .bg").offset().top - 500){
            $(".best .bg .bg01").css("right", `-${pos-800}px`)
            $(".best .bg .bg02").css("left", `-${pos-1200}px`)
            $(".best .bg .bg03").css("right", `-${pos-1600}px`)
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