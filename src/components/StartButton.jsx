import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

export const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

StarButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
