$("document").ready(function () {
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
    const window_img_content = [
        "images/promotion_d.png",
        "images/event_d.png",
        "images/logo_d.png",
        "images/logo_d.png",
        "images/package_d.png"
    ]
    $(".puzzle-click a").click(function(){
        let i = $(this).index();
        $(".window, .window-content").fadeIn(1000)
        $(".window-content img").attr("src", window_img_content[i])
    })

    $(".window-content a, .window").click(function(){
        $(".window, .window-content").fadeOut(1000)
        $(".window-content").scrollTop(0)
    })

    let close = parseInt($(".window-content a").css("top"))
    $(".window-content").scroll(function(){
        $(".window-content a").css("top", close+$(".window-content").scrollTop()+"px")
    })
    new WOW({
        animateClass: "animate__animated"
    }).init();
});