document.addEventListener("DOMContentLoaded", function() {
  
  const fgTheme = new Audio("audio/family-guy-intro-instrumental.opus");
  
  fgTheme.loop = true;
  fgTheme.volume = 0.25;
  fgTheme.play();
  
  document.addEventListener("click", () => {
    if (fgTheme.paused) {
      fgTheme.play();
    }
  });
});
