$("document").ready(function () {
    jQuery(function($) {
        $("body").css("display", "none");
        $("body").fadeIn(500);
        $("a.transition").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        });
        function redirectPage() {
        window.location = linkLocation;
        }
    });
    $(".box ul li").hide().eq(0).show()
    $(".stair ul li").eq(0).addClass("on")
    $(".stair ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".stair ul li").removeClass("on").eq(i).addClass("on")
        $(".box ul li").hide().eq(i).show();
    })
    new WOW({
        animateClass: "animate__animated"
    }).init();
    
});