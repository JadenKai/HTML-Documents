document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("myCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    
    // Draw a green rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
    
    // Draw a blue circle
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
});
