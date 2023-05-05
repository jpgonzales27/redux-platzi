import axios from "axios";

export const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
      console.log(res);
      return res.data.results;
    })
    .catch((err) => console.log(err));
};

export const getPokemonsAxios = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("There was an error: ", error);
  }
};
