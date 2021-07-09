import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = (props) => {
  const { total, operation, next } = props;
  return (
    <div className="display">
      <h1>
        {(!total && next) || total}
        {operation}
        {total && next}
      </h1>
    </div>
  );
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  operation: '0',
  next: '0',
};

export default Display;
