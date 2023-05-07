$(document).ready(function () {
    //icon menu
    $(".icon-menu button").on("click", function () {
        $(".nav-links ul").toggleClass("open");
        $(".nav-links .icon-menu i").toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");
    });
    //---------

    //liste menu and mobile
    var $slide = $("#slide"),
        $ul = $(".nav-links ul"),
        $icon_menu = $(".nav-links .icon-menu i"),
        $mPortfolio = $("#menu-portfolio"),
        $mAccueil = $("#menu-accueil");

    $(".nav-links #menu-portfolio").on("click", function () {
        $slide.addClass("in").removeClass("out");
        $(".portfolio").fadeToggle(700);
        $ul.toggleClass("open");
        //icon change
        $icon_menu.toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");

        //menu active
        $mPortfolio.addClass("active");
        $mAccueil.removeClass("active");
    });

    $(".nav-links #menu-accueil").on("click", function () {
        $slide.removeClass("in").addClass("out");
        $(".portfolio").fadeToggle(700);
        $ul.toggleClass("open");
        //icon change
        $icon_menu.toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");

        //menu active
        $mAccueil.addClass("active");
        $mPortfolio.removeClass("active");

    });
    //---------

    //animation accueil
    $(".accueil .presentation .bonjour").each(function () {
        $(this).animate({opacity: 1}, 900);
    });
    $(".accueil .presentation .moi").each(function () {
        $(this).css({top: 10}).delay(900);
        $(this).animate({opacity: 1, top: 0}, 1000);
    });
    $(".accueil .presentation h5").each(function () {
        $(this).css({top: 10}).delay(1200);
        $(this).animate({opacity: "100%", top: 0 }, 1000);
    });
    $(".accueil .presentation button").each(function () {
        $(this).delay(2500);
        $(this).animate({opacity: "100%"}, 1000);
    });
    //---------


});