import PropTypes from "prop-types";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  console.log("POKEMONS: ", pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard name={pokemon.name} key={pokemon.name} />;
      })}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
