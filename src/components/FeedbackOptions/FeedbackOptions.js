import React from 'react';
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((type) => (
        <button key={type} type="button" onClick={() => onLeaveFeedback(type)}>
          {type}
        </button>
      ))}</div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;