async function pegarCartas(id, quantidadeCarta) {
  if (quantidadeCarta == 3 || quantidadeCarta == 7) {
    const url = `https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=${quantidadeCarta}`;
    const resposta = await fetch(url);
    return await resposta.json();
  } else {
    return;
  }
}

export { pegarCartas };