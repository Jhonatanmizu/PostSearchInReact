// Styles
import "./styles.css";

const Button = (props) => {
  return (
    <button disabled={props.disabled} className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
