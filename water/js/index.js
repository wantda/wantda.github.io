$("document").ready(function () {
    AOS.init();
    $(".header .nav ul").mouseover(function(){
        let nav_list = $(this).index();
        $(".header .nav ul li",".header .nav ul li::after").addClass("on").eq(nav_list).removeClass("on")
    }).mouseout(function(){
        if($(window).width()<1200){
            return
        }
        $(".header .nav ul li").removeClass("on")

        
    })
    $(".header .submenu ul").mouseover(function(){
        $(".header .nav ul li",".header .nav ul li::after").addClass("on")
    })
    $(".header .nav ul").hover(function () {
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on");
    }, function () {
        if($(window).width()<1200){
            return
        }
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    $(".header .submenu").hover(function(){
        if($(window).width()<1200){
            return
        }
        $(".header .submenu").addClass("on");
        $(".header .submenu ul li").addClass("on") 
    }, function(){
        if($(window).width()<1200){
            return
        }
        $(".header .submenu").removeClass("on");
        $(".header .submenu ul li").removeClass("on");
    })
    $(".header .submenu ul").mouseover(function(){
        if($(window).width()<1200){
            return
        }
        let sub_list = $(this).index();
        $(".header .nav ul li").eq(sub_list+1).addClass("on")
        $(".header .nav ul li.on::after").eq(sub_list+1).addClass("on")
    }).mouseout(function(){
        if($(window).width()<1200){
            return
        }
        $(".header .nav ul li").removeClass("on")
    })

    $(".tabmenu ul li").eq(0).addClass("on")
    $(".tabmenu .tab-wrap .tab-content").eq(0).show()
    $(".tabmenu ul li").click(function(){
        let i = $(this).index();
        $(".tabmenu ul li").removeClass("on").eq(i).addClass("on")
        $(".tabmenu .tab-wrap .tab-content").hide().eq(i).show();
    })

    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop : true,
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    $(".footer .site .site-box1 button").click(function(){
        $(".footer .site .site-box1 .list ul").toggleClass("on");
        $(".footer .site .site-box2 .list ul").removeClass("on");
        $(".footer .site .site-box3 .list ul").removeClass("on");
    })
    $(".footer .site .site-box2 button").click(function(){
        $(".footer .site .site-box2 .list ul").toggleClass("on")
        $(".footer .site .site-box1 .list ul").removeClass("on");
        $(".footer .site .site-box3 .list ul").removeClass("on");
    })
    $(".footer .site .site-box3 button").click(function(){
        $(".footer .site .site-box3 .list ul").toggleClass("on")
        $(".footer .site .site-box1 .list ul").removeClass("on");
        $(".footer .site .site-box2 .list ul").removeClass("on");
    })

    $(".m-btn").click(function(){
        if($(window).width()<1024){
            return
        }
        $(".header .nav").toggleClass("on");
        $(".header .submenu").toggleClass("on");
        $(".header .submenu ul li").toggleClass("on");

    })
    $(".m-btn").click(function(){
        $(".m-btn").toggleClass("on");
        $(".m-nav").toggleClass("on")
    })

    $(".m-search").click(function(){
        $(".main .search-wrap").toggleClass("on");
        $(".main .search").toggleClass("on");
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