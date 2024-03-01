document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("myRange");
  const sliderImage = document.getElementById("sliderImage");

  // Mapping of specific values to their corresponding image paths
  const imagePaths = {
    100: "./static/slider_img/black_sunglasses1_3d_object_1.png",
    90: "./static/slider_img/black_sunglasses1_3d_object_0.9.png",
    70: "./static/slider_img/black_sunglasses1_3d_object_0.7.png",
    55: "./static/slider_img/black_sunglasses1_3d_object_0.55.png",
    20: "./static/slider_img/black_sunglasses1_3d_object_0.2.png",
    15: "./static/slider_img/black_sunglasses1_3d_object_0.15.png",
    10: "./static/slider_img/black_sunglasses1_3d_object_0.1.png",
    5: "./static/slider_img/black_sunglasses1_3d_object_0.05.png",
    1: "./static/slider_img/black_sunglasses1_3d_object_0.01.png",
  };

  slider.oninput = function() {
    let value = this.value;
    // Round the value to the nearest valid option
    value = findClosestValue(value);
    // Set the image source based on the rounded value
    sliderImage.src = imagePaths[value];
    
    // sliderValueText.textContent = "Slider Value: " + value;

    // Debug: Print slider value and corresponding image path
    // console.log("Slider Value:", value);
    // console.log("Image Path:", imagePaths[value]);
  };

  // Function to find the nearest valid value
  function findClosestValue(value) {
    const validValues = Object.keys(imagePaths).map(Number);
    let closest = validValues.reduce(function(prev, curr) {
      return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });
    return closest;
  }
});
