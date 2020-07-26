$(document).ready(function(){
  var parallaxInstance;

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },

      576: {
        slidesPerView: 1.5,
      },

      768: {
        slidesPerView: 1.3,
      }
    }
  });

  mySwiper.on('slideChange', function () {
    var index = this.realIndex;

    $('.img-item').removeClass('active');
    $('.img-item[data-img-item-index='+ index +']').addClass('active');
  });

  //Drag me
  $(".swiper-container").mousemove(function (pos) { 
    $(".swiper-hint").addClass('show');
    $(".swiper-hint").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY-10)+'px');  
   }    
  ).mouseleave(function() {
   $(".swiper-hint").removeClass('show');
  });

    // Navigation
  $(".header-hamburger").on("click", function (e) {
    $(this).toggleClass("is-active");
    $(".header-nav").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
  });

  //Parallax
  $( ".scene" ).each(function() {
    var scene = $(this).get(0);
    parallaxInstance = new Parallax(scene, {});
  });
});