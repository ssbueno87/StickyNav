var $window = $(window) ,
    $body = $("body"),
    $mainNav = $(".mainNav") ,
    topOffset = $mainNav.offset().top;   

$window.on("scroll", fixNav) ;
$window.on("resize", rereadoffset);



function fixNav() {
    var topScroll = $window.scrollTop();
        if(topScroll >= topOffset) {
            $mainNav.addClass("fixed");
            $body.css("padding-top", "4em");
            
        }
        else {
            $mainNav.removeClass("fixed");
            $body.css("padding-top", "0");
            
        }
}

function rereadoffset() {
    topOffset = $mainNav.offset().top;
}