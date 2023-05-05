import PropTypes from "prop-types";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";

export const PokemonCard = ({ name, image, types }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta
        description={
          <div>
            {types.map((type) => (
              <span key={type.type.name}>{type.type.name} </span>
            ))}
          </div>
        }
      />
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

PokemonCard.defaultProps = {
  name: "Charmander",
};
