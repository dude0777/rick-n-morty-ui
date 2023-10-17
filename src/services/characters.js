export async function getCharacters() {
  const apiUrl = `https://rickandmortyapi.com/api/character`;
  const response = await fetch(apiUrl);

  const data = await response.json();
  return data;
}
