import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button type="button" className="button" style={style}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: 'name',
  color: '#f5913e',
  wide: false,
};

export default Button;
