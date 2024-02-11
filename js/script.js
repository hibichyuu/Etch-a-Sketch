const pixelDiv = document.querySelector("#pixelContainer");

const restartBtn = document.querySelector("#restartButton");
restartBtn.addEventListener("click", ()=>{restartGrid();});

const colorSelect = document.querySelector("#colorSelect");
colorSelect.addEventListener("change",()=>{changeColor(colorSelect.value); ifSpray = false;});

const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener('click', ()=>{pixelColor = "white"; ifSpray = false;});

const penBtn = document.querySelector("#pen");
penBtn.addEventListener('click', ()=>{changeColor(colorSelect.value); ifSpray = false;});

const gridSelect = document.querySelector("#gridSelect");
gridSelect.addEventListener("change", ()=>{changeGridLength(parseInt(gridSelect.value));});

const sprayBtn = document.querySelector("#spray");
sprayBtn.addEventListener('click', ()=>{ifSpray = true;});

let gridLength = 16;
let pixelColor = "black";
let ifSpray = false;

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
        if(colorSelect.value == "random" && pixelColor == "random"){
            pixel.style.backgroundColor = `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`;
        }
        else{
            pixel.style.backgroundColor = pixelColor;
        }
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

function randomRGBValue(){
    return Math.floor(Math.random() * 255);
}