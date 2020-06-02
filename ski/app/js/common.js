$(document).ready(function () {
  // Slider

  $(".js-slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "my-dots-class",
    prevArrow: "prev",
    nextArrow: "next",
  });

  // Navigation

  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active");
    $(".header-nav").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
    // Do something else, like open/close menu
  });

  $(".js-half-slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "my-dots-class",
    infinite: false,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
    ],
  });
});

//resize

$(window).on("resize", function () {
  var newWidth = $(window).width(),
    thisSlider = $(".js-half-slider");

  if (newWidth < 1024) {
    if (thisSlider.is(".slick-initialized")) {
    } else {
      thisSlider.slick("reinit");
    }
  }
});

// map

function initMap() {
  var myLatLng = { lat: 47.993024, lng: 13.012193 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#2d2d2d",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#a8a8a8",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#242f3e",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffd8a2",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#263c3f",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6b9a76",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#212121",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#212a37",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#fff4e8",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#212121",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#1f2835",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#f3d19c",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#2f3948",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#515c6d",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
    ],
  });

  var icon = "./images/pin.png";

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: icon,
    title: "Hello World!",
  });
}
