
$(document).ready(function(){

// Navigation

  $(".hamburger").on("click", function(e) {
    $(this).toggleClass("is-active");
    $('.header-navigation').toggleClass('active');
    $('body').toggleClass('overflow-hidden');  
    // Do something else, like open/close menu
  });
		 
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('.header-content__scroll');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();


  // Footer-accordion

  $('.js-accordion-title').on('click', function() {
    var parentItem = $(this).closest('.js-accordion-parent'),
        parentWrap = $(this).closest('.js-accordion');
    if($(this).is('.js-active-title')) {
      parentWrap.find('.js-accordion-title').removeClass('js-active-title');
      parentItem.find('.js-accordion-container').slideUp();
      $(this).removeClass('js-active-title');
    } else {
      parentWrap.find('.js-accordion-title').removeClass('js-active-title');
      parentWrap.find('.js-accordion-container').slideUp();
      parentItem.find('.js-accordion-container').slideDown();
      $(this).addClass('js-active-title');
    }
  })
});


