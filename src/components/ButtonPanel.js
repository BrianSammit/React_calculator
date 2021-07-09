import React from 'react';
import PropTypes from 'prop-types';
import Buttom from './Button';
import '../App.css';

const ButtonPanel = ({ clickHandler }) => {
  ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
  };
  ButtonPanel.defaultProps = {
    clickHandler: PropTypes.func,
  };

  return (
    <div className="button_panel">
      <div>
        <Buttom handleClick={clickHandler} name="AC" />
        <Buttom handleClick={clickHandler} name="+/-" />
        <Buttom handleClick={clickHandler} name="%" />
        <Buttom handleClick={clickHandler} name="÷" />
      </div>
      <div>
        <Buttom handleClick={clickHandler} name="7" />
        <Buttom handleClick={clickHandler} name="8" />
        <Buttom handleClick={clickHandler} name="9" />
        <Buttom handleClick={clickHandler} name="X" />
      </div>
      <div>
        <Buttom handleClick={clickHandler} name="4" />
        <Buttom handleClick={clickHandler} name="5" />
        <Buttom handleClick={clickHandler} name="6" />
        <Buttom handleClick={clickHandler} name="-" />
      </div>
      <div>
        <Buttom handleClick={clickHandler} name="3" />
        <Buttom handleClick={clickHandler} name="2" />
        <Buttom handleClick={clickHandler} name="1" />
        <Buttom handleClick={clickHandler} name="+" />
      </div>
      <div>
        <Buttom className="button_0" handleClick={clickHandler} name="0" />
        <Buttom handleClick={clickHandler} name="." />
        <Buttom handleClick={clickHandler} name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
