let input = document.getElementById("inputColor");
let btnRandomColor = document.getElementById("btn-ChangeColor");
btnRandomColor.addEventListener('click',generatebackgroundcolor);

let elementPColorRGB = document.querySelector(".colorRGB");
let elementPColorHex = document.querySelector(".colorHex");

let divElement1 = document.querySelector("#content-1");
let divElement2 = document.querySelector("#content-2");
let divElement3 = document.querySelector("#content-3");
let divElement4 = document.querySelector("#content-4");

let pElements = document.querySelectorAll(".p-content");


divElement1.addEventListener('click',generateBackgroundToDiv)
divElement2.addEventListener('click',generateBackgroundToDiv)
divElement3.addEventListener('click',generateBackgroundToDiv)
divElement4.addEventListener('click',generateBackgroundToDiv)

function GenerateRandom(){
    let numberRandom=Math.ceil((Math.random() * 255) +1);
    return numberRandom;
}

function generatebackgroundcolor(){
    let color = `rgb(${GenerateRandom()}, ${GenerateRandom()}, ${GenerateRandom()})`;    
    console.log(color);

    let colorSubStr = color.substring(4, 17);
    colorSubStr.replace(")", "");
    let array = colorSubStr.split(",");
    array[0] = parseInt(array[0]);
    array[1] = parseInt(array[1]);
    array[2] = parseInt(array[2]);
    elementPColorHex.innerHTML = rgbtoHex(array[0], array[1], array[2]);
    
    document.body.style.backgroundColor = color;
}

function generateBackgroundToDiv () {
    let color = `rgb(${GenerateRandom()}, ${GenerateRandom()}, ${GenerateRandom()})`;
    this.style.backgroundColor = color;  
    if (this.id == "content-1") pElements[0].innerHTML = color;
    if (this.id == "content-2") pElements[1].innerHTML = color;
    if (this.id == "content-3") pElements[2].innerHTML = color;
    if (this.id == "content-4") pElements[3].innerHTML = color;
}

function componetToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbtoHex(r, g, b) {
    return "#" + componetToHex(r) + componetToHex(g) + componetToHex(b);
}