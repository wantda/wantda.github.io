$("document").ready(function (e) {
    jQuery(function($) {
        $("body").css("display", "none");
        $("body").fadeIn(2000);
        $("a.transition").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        });
        function redirectPage() {
        window.location = linkLocation;
        }
    });


    $(".paper > p").eq(0).removeClass("on")
    $(".left .txt ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".paper > p").addClass("on")
        $(".left .txt ul li").removeClass("on").eq(i).addClass("on")
        $(".right .right-wrap .work-content").hide().eq(i).show();
    })
    new WOW({
        animateClass: "animate__animated"
    }).init();
});