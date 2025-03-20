document.addEventListener("DOMContentLoaded", function() {
  // Array of images
  const images = [
    {
      src: "images/death-pose.png",
      caption: "Dead!"
    },
    {
      src: "images/tweaker-freak-out.gif",
      caption: "Tweaking!"
    }
  ];

  let currentImage = 0;

  const changeImage = document.getElementById("changeImage");
  const changeCaption = document.getElementById("changeCaption");
  const changeBtn = document.getElementById("changeBtn");


  // Go through the array
  function showImage(index) {
    if (index < 0 || index >= images.length) {
      currentImage = 0;
    } else {
      currentImage = index;
    }
    changeImage.src = images[currentImage].src;
    changeImage.alt = images[currentImage].caption;
    changeCaption.textContent = images[currentImage].caption;
  }

  // Button
  changeBtn.addEventListener("click", function() {
    const nextImage = currentImage + 1;
    showImage(nextImage);
  });

  showImage(currentImage);
});
