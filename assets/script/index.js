import { pegarBaralho } from "./services/baralho.js";
import { pegarCartas } from "./services/cartas.js";
import { salvarImagemEValor } from "./functions/imagem-valor.js";

const intro = document.querySelector(".intro");
const btnMobile = document.getElementById("btn-mobile");
const btnPC = document.getElementById("btn-pc");

export let quantidadeCarta;

btnMobile.addEventListener("click", () => {
  tirarCartas();
  intro.classList.add("comecou");
  return (quantidadeCarta = 3);
});
btnPC.addEventListener("click", () => {
  tirarCartas();
  intro.classList.add("comecou");
  return (quantidadeCarta = 7);
});

async function tirarCartas() {
  const baralho = await pegarBaralho();
  const cartasUser = await pegarCartas(baralho.deck_id, quantidadeCarta);
  const cartasMaquina = await pegarCartas(baralho.deck_id, quantidadeCarta);
  const deckCartasUser = await cartasUser.cards;
  const deckCartasMaquina = await cartasMaquina.cards;
  salvarImagemEValor(deckCartasUser, deckCartasMaquina);
}