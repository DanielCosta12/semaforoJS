const buttons = document.getElementById("buttons");
const img = document.getElementById("img");
const imgVerde = "./assets/verde.png";
const imgVermelho = "./assets/vermelho.png";
const imgAmarelo = "./assets/amarelo.png";
let intervalId = null;
let corIndex = 0;

const semaforo = (event) => {
  // console.log(event.target.id); pega onde foi clicado e pega o id
  paraAuto();
  ligar[event.target.id]();
};

const proximoIndex = () => (corIndex = corIndex < 2 ? ++corIndex : 0);

const corAuto = () => {
  const cores = ["vermelho", "verde", "amarelo"];
  const color = cores[corIndex];
  ligar[color]();
  proximoIndex();
};

const paraAuto = () => {
  clearInterval(intervalId);
};
const ligar = {
  vermelho: () => (img.src = imgVermelho),
  amarelo: () => (img.src = imgAmarelo),
  verde: () => (img.src = imgVerde),
  auto: () => (intervalId = setInterval(corAuto, 500)),
};
buttons.addEventListener("click", semaforo);
