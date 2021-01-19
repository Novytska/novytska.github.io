$(window).on('load', function () {
  $('.preloader').fadeOut();
  $('body').attr('id','');
});

$(document).ready(function () {

  // Navigation

  $(".hamburger-js").on("click", function (e) {
    $(this).toggleClass("active-btn");
    $(".js-nav").toggleClass("active");
    $('.js-back').toggleClass("btn-remove");
    $("body").toggleClass("overflow-hidden");
  });

  // Slider

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // Tabs

  $(".js-tabs-head").on("click", function () {
    var parentElement = $(this).closest(".js-tabs-parent"),
      thisData = $(this).attr("data-tab");

    $('.wrapper-p').attr('class', 'wrapper-p');
    parentElement.find(".js-tabs-head").removeClass("js-tabs-active");
    parentElement.find(".js-content-tab").removeClass("js-content-selected").removeClass('switch-item');

    $(this).toggleClass("js-tabs-active");
    parentElement.find(".js-content-tab[data-tab-content=" + thisData + "]").addClass("js-content-selected");
    $('.wrapper-p').addClass(thisData);
  });

  $('.js-show').on('click', function(e) {
    $('.portfolio-content').addClass('switch-item');
  });

  $('.js-back').on('click', function(e) {
    $('.portfolio-content').removeClass('switch-item');
  });

  // $('.js-animate-item').each(function (index, item) {
  //   animateDiv(item)
  // });

  // function makeNewPosition(parentClass){
  //   var element = $('.js-animate-parent');
  //   var h = element.height() - 50;
  //   var w = element.width() - 50;
  //   var nh = Math.floor(Math.random() * h);
  //   var nw = Math.floor(Math.random() * w);
  //   return [nh,nw];

  // };

  // function animateDiv(myclass, parentClass){
  //   var newq = makeNewPosition(parentClass);
  //   $(myclass).animate({ top: newq[0], left: newq[1] }, randomInteger(2000, 4000),   function(){
  //       animateDiv(myclass);
  //   });

  // };

  // function randomInteger(min, max) {
  //   var rand = min - 0.5 + Math.random() * (max - min + 1)
  //   rand = Math.round(rand);
  //   return rand;
  // };

  // function getCoords('.dots') {
  //   var box = elem.getBoundingClientRect();
  //   return {
  //     top: box.top + pageYOffset,
  //     left: box.left + pageXOffset
  //   };

  // }

  $(window).scroll(function() {
    if ( $('.wrapper').length ) {
      animateDots('.dots-project');
      animateDots('.dots-technologies');
    } else {
      myFunction();
    }
  });

  function animateDots(element) {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var dotsBottom = $(`${element}`).offset().top;

    if (windowBottom >= dotsBottom) {
      $(`${element}`).addClass('dot-animation');
    }
  }

  function myFunction() {
    let headerClass = $('.header-fixed');

    if (window.pageYOffset > headerClass.height()) {
      headerClass.addClass("sticky");
    } else {
      headerClass.removeClass("sticky");
    }
  }
});

