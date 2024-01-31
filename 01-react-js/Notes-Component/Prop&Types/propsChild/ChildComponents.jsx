import PropType from "prop-types";


const ChildComponents = (props) => {
  return <div>{props.children}</div>;
};

ChildComponents.propTypes = {
   children: PropType.array
}

export default ChildComponents;
