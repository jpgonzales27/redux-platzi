/**
 * logger de las acciones
 */
export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

/**
 * agrega un nuevo pokemon al inicio
 */
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

/**
 * Cambiar primer letra a Mayuscula
 */
export const nameUpperCase = (store) => (next) => (actionInfo) => {
  const featured = [
    ...actionInfo.action.payload.map((pokemon) => ({
      ...pokemon,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    })),
  ];

  const updateActionInfo = {
    ...actionInfo,
    action: {
      ...actionInfo.action,
      payload: featured,
    },
  };
  next(updateActionInfo);
};

/**
 * ordena los pokemon en orden alfabetico
 */
export const myMiddleware = (store) => (next) => (actionInfo) => {
  const alphabetPokemon = actionInfo.action.payload
    .map((poke) => poke.name)
    .sort();
  const pokemonPayload = actionInfo.action.payload.map((poke, index) => ({
    ...poke,
    name: alphabetPokemon[index],
  }));

  const myFormatPokemon = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: pokemonPayload },
  };

  // console.log(myFormatPokemon)
  next(myFormatPokemon);
};

/**
 * Add un numero a los pokemons
 */
export const addNumber = (store) => (next) => (action) => {
  const counted = action.action.payload.map((pokemon, i) => ({
    ...pokemon,
    name: `${[i + 1]}. ${pokemon.name}`,
  }));
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: counted },
  };
  next(updatedAction);
};
