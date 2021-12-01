import React from "react";
import s from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ nameBtn, onLeaveFeedback }) => {
  return (
    <button
      className={s.button}
      onClick={() => onLeaveFeedback(nameBtn)}
      type="button"
    >
      {nameBtn}
    </button>
  );
};
Button.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
