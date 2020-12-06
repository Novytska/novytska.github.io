$(document).ready(function () {
  
  // Tabs

  $(".js-tabs-head").on("click", function () {
    var parentElement = $(this).closest(".js-tabs-parent"),
      thisData = $(this).attr("data-tab");

    parentElement.find(".js-tabs-head").removeClass("js-tabs-active");
    parentElement.find(".js-content-tab").removeClass("js-content-selected");

    $(this).toggleClass("js-tabs-active");
    parentElement
      .find(".js-content-tab[data-tab-content=" + thisData + "]")
      .addClass("js-content-selected");
  });

  //Image

  $(".js-team-item").on("click", function () {
    let imageSrc = $(this).find('.team-main__item-img').attr('data-src'),
        imageLarge = $('.js-image-large');

    imageLarge.fadeOut('fast', function () {
      imageLarge.attr('src', imageSrc);
      imageLarge.fadeIn('fast');
    });
  });


  // Navigation

  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active");
    $(".js-nav").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
  });

  //Scrol

  $('a[data-scroll]').click( function(e){
    e.preventDefault();

    let scroll = $(this).data('scroll');

    $('html, body').animate({ scrollTop: $(scroll).offset().top}, 1000);

    return false;
  });

  //Form-validate

  $(".subs-content__form").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Поле Email обов'язкове до заповлення"
      }
    }
  });

  $(".contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 6
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Поле Ім'я обов'язкове до заповлення",
        minlength: "Довжина імені не менш як 3 букви"
      },
      email: {
        required: "Поле Email обов'язкове до заповлення"
      }
    }
  });
});
