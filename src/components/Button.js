import React from "react";
import styles from "./Styles.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.text}
      </button>
    </>
  );
};

Button.defaultProps = {
  className: "btn",
  text: "Button",
  disabled: false,
  onClick() {}, // no-op by default for click handler
  type: "submit", // default button is submit if not specified otherwise
};

export default Button;
