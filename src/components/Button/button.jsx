import "./styles.css";
export default function Button(props) {
  return (
    <button disabled={props.disabled} className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
