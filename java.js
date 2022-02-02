const extContainer = document.getElementById("extContainer");

function drawSquares() {
  for (i = 0; i < 256; i++) {
    let newSquare = document.createElement("div");
    newSquare.className = "pixel";
    extContainer.appendChild(newSquare);
    newSquare.addEventListener('mouseenter',function(){
        newSquare.classList.add("red");
    })
  }
}

drawSquares();


