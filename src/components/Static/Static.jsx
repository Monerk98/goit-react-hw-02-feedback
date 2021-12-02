import React from "react";
import s from "./Static.module.css";
import PropTypes from "prop-types";

const Static = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.staticTitle}>Statistics</h2>
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
    </>
  );
};
Static.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Static;
