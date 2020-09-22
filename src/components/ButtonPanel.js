import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="buttonPanel">
      <div className="buttonGroup">
        <Button name="AC" color="#e0e0e0" />
        <Button name="+/-" color="#e0e0e0" />
        <Button name="%" color="#e0e0e0" />
        <Button name="÷" />
      </div>
      <div className="buttonGroup">
        <Button name="7" color="#e0e0e0" />
        <Button name="8" color="#e0e0e0" />
        <Button name="9" color="#e0e0e0" />
        <Button name="X" />
      </div>
      <div className="buttonGroup">
        <Button name="4" color="#e0e0e0" />
        <Button name="5" color="#e0e0e0" />
        <Button name="6" color="#e0e0e0" />
        <Button name="-" />
      </div>
      <div className="buttonGroup">
        <Button name="1" color="#e0e0e0" />
        <Button name="2" color="#e0e0e0" />
        <Button name="3" color="#e0e0e0" />
        <Button name="+" />
      </div>
      <div className="buttonGroup">
        <Button name="0" color="#e0e0e0" wide="true" />
        <Button name="." color="#e0e0e0" />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
