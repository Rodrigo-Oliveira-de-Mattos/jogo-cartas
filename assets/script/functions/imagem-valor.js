import { adicionarComparador } from "./comparador.js";

const maquinaMao = document.getElementById("maquina");
const userMao = document.getElementById("user");
const mesa = document.getElementById("mesa");

let imagemCartasUser;
let imagemCartasMaquina;

function salvarImagemEValor(user, maquina) {
  imagemCartasUser = user.map((img) => {
    return img.image;
  });
  imagemCartasMaquina = maquina.map((img) => {
    return img.image;
  });

  adicionarCartasNaTela(imagemCartasUser, imagemCartasMaquina);
}

function adicionarCartasNaTela(user, maquina) {
  user.forEach((img) => userMao.innerHTML += `<img class="cartaParaEscolha " src="${img}">`);
  maquina.forEach((img) => maquinaMao.innerHTML += `<img class="escolhaMaquina" src="${img}">`);
  mesa.classList.remove("hidden");
  adicionarComparador();
}

export { salvarImagemEValor };