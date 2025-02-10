function drawRect(width, height, char = "#") {
  if (width <= 0 || height <= 0) {
    console.log("Invalid parameters");
    return;
  }

  for(let i = 0; i < height; i++) {
    console.log(char.repeat(width));
  }
}

drawRect(5, 5);
drawRect(5, 5, "*");
