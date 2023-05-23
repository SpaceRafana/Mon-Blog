$(document).ready(function () {
    //icon menu
    $(".icon-menu button").on("click", function () {
        $(".nav-links ul").toggleClass("open");
        $(".nav-links .icon-menu i").toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");
    });
    //---------

    /*scroll to top*/

    $(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
            $("#back-to-top").addClass('b-show_scrollBut');
        }else{
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });
    $("#back-to-top").on("click", function(){
        $('body,html').animate({
            scrollTop: 0,
        }, 100);
    });

    //------------------

    //liste menu and mobile
    var $slide = $("#slide"),
        $ul = $(".nav-links ul"),
        $icon_menu = $(".nav-links .icon-menu i"),
        $btnRetourAccueil = $(".portfolio .retour-accueil button"),
        $mAccueil = $("#menu-accueil"),
        $mArticle = $("#menu-article");

    $(".presentation button").on("click", function () {
        $slide.addClass("in").removeClass("out");
    });

    $btnRetourAccueil.on("click", function () {
        $slide.removeClass("in").addClass("out");
    });

    $(".nav-links #menu-article").on("click", function () {
        $slide.removeClass("in").addClass("out");
        $ul.toggleClass("open");
        //icon change
        $icon_menu.toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");

        //menu active
        $mArticle.addClass("active");
        $mAccueil.removeClass("active");

    });

    //---------

    //animation accueil
    var $bonjour = $(".accueil .presentation .bonjour"),
        $moi = $(".accueil .presentation .moi"),
        $h2 = $(".accueil .presentation h2");
    $bonjour.delay(200).fadeToggle(800, function () {
        $moi.animate({opacity: 1, top: 0},1000, function () {
            $h2.css({position: "relative", top: 10}).animate({opacity: 1, top: 0 }, 1000);
        });
    });
    //---------

    /*box article*/
    $('.box').on('mouseenter', function () {
        $(this).parent().prev().children(".cercle").addClass("cercle-open");
    }).on('mouseleave', function () {
        $('.cercle').removeClass("cercle-open");
    });
    //-------------

    $('.ligne-y').each(function () {
        $(this).delay(400).animate({height: 30}, 800);
    })

    /*let sr = ScrollReveal({reset: true});
    sr.reveal('.competence', {
        origin: "right",
        duration: 2000
    });*/

});