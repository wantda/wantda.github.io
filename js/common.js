$("document").ready(function () {

    $(".m-btn, .window").click(function(){
        if(!$(".window-content").is(":visible")){
            $(".m-nav").toggleClass("on")
            $(".m-btn").toggleClass("on")
            $(".window").fadeToggle()
        }
    })


});