import PropTypes from "prop-types";

export const PropFunc = (props) => {
  const { handleFunction } = props;
  return (
    <div>
      <button onClick={handleFunction}>Click me Please</button>
    </div>
  );
};

PropFunc.propTypes = {
  handleFunction: PropTypes.func.isRequired,
};
