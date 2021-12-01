import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((nameBtn) => (
    <Button key={nameBtn} nameBtn={nameBtn} onLeaveFeedback={onLeaveFeedback} />
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
