document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("mainCanvas");
  if (!canvas.getContext) return;
  const ctx = canvas.getContext("2d");

  const spawnButton = document.getElementById("spawnButton");
  const characterInput = document.getElementById("characterInput");

  // Function to load and draw an image on the canvas at a given position
  function drawImageOnCanvas(src, x, y) {
    const img = new Image();
    img.src = src;
    img.onload = function() {
      ctx.drawImage(img, x, y, 100, 100);
    }
  }

  spawnButton.addEventListener("click", function() {
    const character = characterInput.value.trim().toLowerCase();
    const validCharacters = ["quag", "stew","pete", "chris"];
    
    if (validCharacters.includes(character)) {
      // Choose a random position within the canvas
      const imgWidth = 50;
      const imgHeight = 50;
      const x = Math.random() * (canvas.width - imgWidth);
      const y = Math.random() * (canvas.height - imgHeight);
      
      // Place the character image at the random position
      drawImageOnCanvas(`/images/${character}.png`, x, y);
      
      // Play the character's audio
      const audio = new Audio(`/audio/${character}.mp3`);
      audio.volume = 0.25;
      audio.play();
      
      // Clear the input field
      characterInput.value = "";
    } else {
      alert("READ");
    }
  });
});
