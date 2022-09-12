const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const auto = document.getElementById("auto");
const img = document.getElementById("img");
const imgVerde = "./assets/verde.png";
const imgVermelho = "./assets/vermelho.png";
const imgAmarelo = "./assets/amarelo.png";

function liberado() {
  img.src = imgVerde;
}
function pare() {
  img.src = imgVermelho;
}
function alertar() {
  img.src = imgAmarelo;
}
function automatico() {
  
}

verde.addEventListener("click", () => liberado());
vermelho.addEventListener("click", () => pare());
amarelo.addEventListener("click", () => alertar());
auto.addEventListener("click", () => automatico(setInterval, 1000));
