import PropTypes from "prop-types";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import { StarButton } from "./StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const typesString = types.map((elem) => elem.type.name).join(", ");
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
};

PokemonCard.defaultProps = {
  name: "Charmander",
};
