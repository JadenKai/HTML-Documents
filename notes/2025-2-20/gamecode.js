window.addEventListener("load", loadHandler);

let canvas = document.getElementById("gameFeild");
let context = canvas.getContext("2d");
let petePic= document.getElementById("petePic");
let pete;


class Peter {
    xPos = 100;
    yPos = 100;
    constructor(img) {
      this.img = img;
    }

    move(x, y) {
      this.x = x;
      this.y = y;
    }

    draw() {
      context.drawImage(this.img, this.xPos, this.yPos, 100, 100);
    }
}

function canvasClickedHandler(even) {
  const rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  pete.move(x,y);
  pete.draw();
}

function loadHandler(event) {
  console.log("Loadhandling...");

  canvas.addEventListener("click", canvasClickedhandler)

  pete = new Peter(img);
  pete.draw();
}
