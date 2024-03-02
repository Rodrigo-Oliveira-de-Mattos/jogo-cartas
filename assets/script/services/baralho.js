export async function pegarBaralho() {
  const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const resposta = await fetch(url);
  return await resposta.json();
}