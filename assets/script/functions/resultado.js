import { cartaMaquinaParaCompararHTML, cartaUserParaCompararHTML, visualResultado } from "../variables.js";
import { quantidadeCarta } from "../index.js";

const maquinaPontos = document.getElementById("ponto-maquina");
const userPontos = document.getElementById("ponto-user");

let contadorUser = 0;
let contadorMaquina = 0;

function perdeu() {
  visualResultado.innerHTML = ">";

  userPontos.classList.remove("ganhou");
  cartaUserParaCompararHTML.classList.remove("ganhou");
  visualResultado.classList.remove("ganhou");
  cartaMaquinaParaCompararHTML.classList.remove("perdeu");
  maquinaPontos.classList.remove("perdeu");

  userPontos.classList.add("perdeu");
  cartaUserParaCompararHTML.classList.add("perdeu");
  visualResultado.classList.add("perdeu");
  cartaMaquinaParaCompararHTML.classList.add("ganhou");
  maquinaPontos.classList.add("ganhou");

  contadorMaquina += 10;
  maquinaPontos.innerHTML = `pontos maquina: ${contadorMaquina}`;
  quantidadeCarta == 3 ? testeVitoriaMobile() : testeVitoriaPC();
}

function ganhou() {
  visualResultado.innerHTML = "<";

  userPontos.classList.remove("perdeu");
  cartaUserParaCompararHTML.classList.remove("perdeu");
  visualResultado.classList.remove("perdeu");
  cartaMaquinaParaCompararHTML.classList.remove("ganhou");
  maquinaPontos.classList.remove("ganhou");

  userPontos.classList.add("ganhou");
  cartaUserParaCompararHTML.classList.add("ganhou");
  visualResultado.classList.add("ganhou");
  cartaMaquinaParaCompararHTML.classList.add("perdeu");
  maquinaPontos.classList.add("perdeu");

  contadorUser += 10;
  userPontos.innerHTML = `seus pontos: ${contadorUser}`;
  quantidadeCarta == 3 ? testeVitoriaMobile() : testeVitoriaPC();
}

function testeVitoriaMobile() {
  if (contadorUser == 20) {
    alert("vitoria");
    location.reload();
  }
  if (contadorMaquina == 20) {
    alert("derrota");
    location.reload();
  }
}

function testeVitoriaPC() {
  if (contadorUser == 40) {
    alert("vitoria");
    location.reload();
  }
  if (contadorMaquina == 40) {
    alert("derrota");
    location.reload();
  }
}

export { testeVitoriaPC, testeVitoriaMobile, ganhou, perdeu };