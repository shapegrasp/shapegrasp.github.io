window.HELP_IMPROVE_VIDEOJS = false;

const IMAGE_BASE = "./static/slider_img/";
const NUM_INTERP_FRAMES = 100

const imagePaths = {
    100: "black_sunglasses1_3d_object_1.png",
    90: "black_sunglasses1_3d_object_0.9.png",
    70: "black_sunglasses1_3d_object_0.7.png",
    55: "black_sunglasses1_3d_object_0.55.png",
    20: "black_sunglasses1_3d_object_0.2.png",
    15: "black_sunglasses1_3d_object_0.15.png",
    10: "black_sunglasses1_3d_object_0.1.png",
    5: "black_sunglasses1_3d_object_0.05.png",
    1: "black_sunglasses1_3d_object_0.01.png",
};

var interp_images = [];

function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = IMAGE_BASE + getImagePath(i);
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function getImagePath(value) {
  // Define your custom logic to determine the image path based on the value
  if (value >= 0 && value <= 1) {
    return imagePaths[1];
  } else if (value >= 1 && value <= 5) {
    return imagePaths[1];
  } else if (value > 5 && value <= 10) {
    return imagePaths[10];
  } else if (value > 10 && value <= 15) {
    return imagePaths[15];
  } else if (value > 15 && value <= 20) {
    return imagePaths[20];
  } else if (value > 20 && value <= 55) {
    return imagePaths[55];
  } else if (value > 55 && value <= 70) {
    return imagePaths[70];
  } else if (value > 70 && value <= 90) {
    return imagePaths[90];
  } else if (value > 90 && value <= 100) {
    return imagePaths[100];
  } else {
    // Handle cases beyond the defined ranges
    return ""; // or any default path you prefer
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
