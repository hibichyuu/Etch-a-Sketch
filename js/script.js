const pixelDiv = document.querySelector("#pixelContainer");

const restartBtn = document.querySelector("#restartButton");
restartBtn.addEventListener("click", ()=>{restartGrid();});

const colorSelect = document.querySelector("#colorSelect");
colorSelect.addEventListener("change",()=>{changeColor(colorSelect.value)});

const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener('click', ()=>{pixelColor = "white";});

const penBtn = document.querySelector("#pen");
penBtn.addEventListener('click', ()=>{changeColor(colorSelect.value);});

const gridSelect = document.querySelector("#gridSelect");
gridSelect.addEventListener("change", ()=>{changeGridLength(parseInt(gridSelect.value));});

let gridLength = 16;
let pixelColor = "black";

createPixels();

function createPixels(){

    for(let i = 1; i<=gridLength; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 1; j<=gridLength; j++){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
            addPixelListeners(pixel);
        }
        pixelDiv.appendChild(row);
    }

}

function addPixelListeners(pixel){
    pixel.addEventListener("mouseover", ()=>{
        pixel.style.backgroundColor = pixelColor;
    });
}

function restartGrid(){
    pixelDiv.textContent = '';
    createPixels();
}

function changeColor(color){
    
        pixelColor = color;

}

function changeGridLength(length){
    gridLength = length;
}