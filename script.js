function generateRandomHexColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }
  
  return "#" + randomColor;
}

const generateGrid = (size) => {
    for(let i = 0; i<size * size; i++){
        const square = document.createElement("div");
        square.classList.add("squares");
        square.style.backgroundColor = "white";
        grid.appendChild(square);
    }
    const squares = document.querySelectorAll(".squares");
    
    const squareSize = 500 / size;

    squares.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = generateRandomHexColor();
    });
});
}


const promptUser = () => {
    const gridSize = prompt("Enter the size of the grid X by X:");
    if(gridSize > 100){
        gridSize = 100;
    }else if(gridSize < 1){
        gridSize = 1
    }
    grid.textContent = "";
    generateGrid(gridSize);
}

const grid = document.querySelector("#grid");
const resetBtm = document.querySelector("button");

resetBtm.addEventListener("click", (event) =>{
    event.preventDefault();
    promptUser();
});
generateGrid(16);
