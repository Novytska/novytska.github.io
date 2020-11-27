$(document).ready(function () {
  
  // Slider

  $(".js-slider").slick({
    arrows: true,
    dots: true,
    dotsClass: "my-dots-class",
    prevArrow: ".slick-arrow__prev",
    nextArrow: ".slick-arrow__next",
  });

  // Navigation

  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active");
    $(".js-nav").toggleClass("active");
    $(".header-top__content").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
    $(".js-slider").slick("resize");
  });

  // Search

  $(".js-search").on("click", function (e) {
    $(".search-wrap").addClass("active-search");
    $("body").addClass("overflow-hidden");
    $(".js-slider").slick("resize");
  });

  $(".search-close").on("click", function (e) {
    $(".search-wrap").removeClass("active-search");
    $("body").removeClass("overflow-hidden");
    $(".js-slider").slick("resize");
  });

  //Page-up

  $(".js-up").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // Footer

  $(".js-map").on("click", function () {
    if ($(".js-map").is(".active-map")) {
      $(".js-map").removeClass("active-map");
      $(".footer-list").slideUp();
    } else {
      $(".js-map").addClass("active-map");
      $(".footer-list").slideDown();
    }
  });
});
