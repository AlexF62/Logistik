$(function() {
    let intro = $("#intro");
    let header = $("#header")
    let introH = intro.innerHeight();

    /* Header class on scroll */
    
    $(window).on("scroll resize", function() {
    
    let scrollTop = $(this).scrollTop()
    
    if(scrollTop >= introH) {
        header.addClass("header--dark");
    } else {
        header.removeClass("header--dark");
    }

    /* Smooth Scroll to section */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    })

    let scrollElement = $(this).data("scroll");
    let scrollPost = $(scrollElement).offset().top;

    $("html, body").animate({
        scrollTop: scrollPost
    }, 500)
    
    });
    
})
