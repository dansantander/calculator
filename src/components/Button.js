import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide, clickHandler }) {

  const handleClick = buttonName => {
    clickHandler(buttonName);
  }
   
  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button type="button" className="button" style={style} onClick={() => handleClick(name)}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]), // Un objeto que puede ser de diferentes tipos
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'name',
  color: '#f5913e',
  wide: false,
};

export default Button;
