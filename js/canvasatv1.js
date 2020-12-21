//Capturando o Canvas HTML por id
const myCanvas = document.getElementById("myCanvas");
let contexto = myCanvas.getContext("2d");

//Configurando  Dimensões
myCanvas.style.width = 1366;
myCanvas.style.height = 608;

//Posição e Cor
myCanvas.style.alignSelf = "center";
myCanvas.style.backgroundColor = "black";

let x = 200;
let y = 100;
let largura = 300; 
let altura = 150;


function desenhar() {
    contexto.clearRect(0, 0, 150, 75);
    contexto.fillStyle = "rgb(255, 128, 0)";
    contexto.fillRect(x, y, largura, altura);
    requestAnimationFrame(desenhar);
}

document.onkeydown = function (evt) {

    if( evt.key == 37 ) {
        x -= 5;
    }

    if( evt.key == 39 ) {
        x += 5;
    }
}

document.onkeyup = function (evt) {
    y -= 7;
}



requestAnimationFrame(desenhar);



