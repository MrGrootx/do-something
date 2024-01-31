import PropTypes from "prop-types";

export const OneOfCom = (prop) => {
  return <div>{prop.name}</div>;
};

OneOfCom.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};
