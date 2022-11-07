<<<<<<< HEAD
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
    new WOW({
        animateClass: "animate__animated"
    }).init();
=======
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
    new WOW({
        animateClass: "animate__animated"
    }).init();
>>>>>>> 22ee1a223e47e699e20bbc87ac67d52de37077bf
});