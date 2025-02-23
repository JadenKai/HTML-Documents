document.addEventListener("DOMContentLoaded", function() {
  const spawnArea = document.getElementById("spawnArea");
  if (!spawnArea) return;

  spawnArea.addEventListener("click", function(event) {
    // Get the rectangle boundary
    const rect = spawnArea.getBoundingClientRect();
    // Click coordinates
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Create a new image element
    const img = document.createElement("img");
    img.src = "images/pete.png";
    img.alt = "Pete";
    img.style.position = "absolute";
    
    // Put image at click location
    img.style.left = x + "px";
    img.style.top = y + "px";
    
    // Update spawnArea
    spawnArea.appendChild(img);

    // Play audio
    const audio = new Audio("audio/hehe.mp3");
    audio.volume = 0.25;
    audio.play();
  });
});
