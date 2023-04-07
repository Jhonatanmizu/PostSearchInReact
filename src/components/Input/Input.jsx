// Styles
import "./Input.css";

const Input = (props) => {
  return (
    <input
      className="textInput"
      type="search"
      placeholder="Buscar"
      onChange={props.handleSearch}
      value={props.searchValue}
    />
  );
};

export default Input;
