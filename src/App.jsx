import PropTypes from "prop-types";
import "./App.css";
import { Col } from "antd";
import { Search } from "./components/Search";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { useEffect } from "react";
import { getPokemonsAxios } from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      // const pokemonsRes = await getPokemons();
      const pokemonsRes = await getPokemonsAxios();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

/**
 * mapStateToProps es una función recibe nuestro estado y retorna un objeto cuyas
 * propiedades van a ser enviadas a las props del componente que se está conectado a redux.
 */
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

/**
 * mapDispatchToProps es una función que recibe el dispatcher de redux y
 * retorna un objeto que será mapedo a las propiedades con los action creatrors
 */
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
