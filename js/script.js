const pixelDiv = document.querySelector("#pixelContainer");

createPixels();


function createPixels(){

    for(let i = 1; i<=16; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 1; j<=16; j++){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        pixelDiv.appendChild(row);
    }

}