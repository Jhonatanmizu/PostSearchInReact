import "./Input.css";
export default function Input(props) {
  return (
    <input
      className="textInput"
      type="search"
      placeholder="Buscar"
      onChange={props.handleSearch}
      value={props.searchValue}
    />
  );
}
