import { cartaMaquinaParaCompararHTML, cartaUserParaCompararHTML} from "../variables.js";
import { ganhou, perdeu,} from "./resultado.js";
import { cartasValoresObj } from "../cartas-obj.js";

let escolhaUser;
let escolhaMaquina;

function adicionarComparador() {
  escolhaUser = document.querySelectorAll(".cartaParaEscolha");
  escolhaMaquina = document.querySelectorAll(".escolhaMaquina");
  escolhaUser.forEach((item, index) => {
    item.addEventListener("click", () => {
      !escolhaUser[index].classList.contains("usado")
        ? adicionarCartasParaComparar(escolhaUser[index], escolhaMaquina[index])
        : console.log();
    });
  });
}

function adicionarCartasParaComparar(user, maquina) {
  user.classList.add("usado");
  maquina.classList.add("usado");
  const imgCartaParaCompararUser = user.src;
  const urlCartaUser = `"${imgCartaParaCompararUser}"`;
  const valorCartaUser = urlCartaUser.substr(39, 2);
  const cartaUserParaComparar = {
    url: imgCartaParaCompararUser,
    valor: valorCartaUser,
  };
  const imgCartaParaCompararMaquina = maquina.src;
  const urlCartaMaquina = `"${imgCartaParaCompararMaquina}"`;
  const valorCartaMaquina = urlCartaMaquina.substr(39, 2);
  const cartaMaquinaParaComparar = {
    url: imgCartaParaCompararMaquina,
    valor: valorCartaMaquina,
  };
  cartaUserParaCompararHTML.innerHTML = `<img class="escolhaUser" src="${cartaUserParaComparar.url}" alt="${cartaUserParaComparar.valor}">`;
  cartaMaquinaParaCompararHTML.innerHTML = `<img class="escolhaMaquina" src="${cartaMaquinaParaComparar.url}" alt="${cartaMaquinaParaComparar.valor}">`;
  setTimeout((user, maquina) => {
    user = cartaUserParaComparar.valor;
    maquina = cartaMaquinaParaComparar.valor;
    compararValores(user, maquina);
  }, 0);
}

function compararValores(user, maquina) {
  let valorEscolhaUser = cartasValoresObj[`c${user}`];
  let valorEscolhaMaquina = cartasValoresObj[`c${maquina}`];
  comparar(valorEscolhaUser, valorEscolhaMaquina);
}

function comparar(user, maquina) {
  user > maquina ? ganhou() : perdeu();
}

export { adicionarComparador };