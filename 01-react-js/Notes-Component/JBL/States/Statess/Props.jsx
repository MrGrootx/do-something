import PropTypes from "prop-types";

export const Props = (props) => {
  const { carDetails } = props;
  const { brand, color } = carDetails;
  return (
    <div>
      My Car Brand {brand}, Car Color {color}
    </div>
  );
};

Props.propTypes = {
  carDetails: PropTypes.object,

};
