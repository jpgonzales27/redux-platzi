import "./App.css";
import { Col, Spin } from "antd";
import { Search } from "./components/Search";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { useEffect } from "react";
import { getPokemonsAxios } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemonsAxios();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
