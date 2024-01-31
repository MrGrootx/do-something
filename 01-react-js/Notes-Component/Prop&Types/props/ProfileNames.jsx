import PropTypes from "prop-types";

const ProfileName = (props) => {
  const { name, age, isAlien } = props;
  return (
    <div>
      <ul className="flex gap-x-3 bg-teal-300">
        <label htmlFor="">Names :</label>
        <li>{name}</li>
      </ul>
      <ul className="flex gap-x-3 bg-teal-300">
        <label htmlFor="">Age :</label>
        <li>{age}</li>
      </ul>
      <ul className="flex gap-x-3 bg-teal-300">
        <label htmlFor="">isALien :</label>
        <li>{isAlien ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};

export default ProfileName;

ProfileName.propTypes = {
  // propTypes Start with Caps
  name: PropTypes.string,
  age: PropTypes.number,
  isAlien: PropTypes.bool.isRequired,
  
};

ProfileName.defaultProps = {
   name: "Groot",
   age: 100,
   isAlien: true
}