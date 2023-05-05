import "./App.css";
import { Col } from "antd";
import { Search } from "./components/Search";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { useEffect } from "react";
import { getPokemonsAxios } from "./api";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const { pokemons } = useSelector((state) => state.pokemons);
  const algo = useSelector((state) => state.pokemons);
  console.log("pokemons selector: ", algo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      // const pokemonsRes = await getPokemons();
      const pokemonsRes = await getPokemonsAxios();
      console.log("POKEMONSRES :", pokemonsRes);
      dispatch(setPokemons(pokemonsRes));
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
      {/* <PokemonList pokemons={pokemons} /> */}
    </div>
  );
}

export default App;
