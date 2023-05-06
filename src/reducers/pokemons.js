import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_LOADING:
      // return { ...state, loading: action.payload };
      return state.setIn(["loading"], action.payload);
    case SET_FAVORITE: {
      const currentPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.get("id") === action.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      // return { ...state, pokemons: newPokemonsList };
      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );
    }
    default:
      return state;
  }
};
