const URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Error");
  }

  return await res.json();
};
