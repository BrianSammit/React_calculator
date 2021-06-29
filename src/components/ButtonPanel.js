import React from 'react';
import Buttom from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Buttom name="AC" />
      <Buttom name="+/-" />
      <Buttom name="%" />
      <Buttom name="÷" />
    </div>
    <div>
      <Buttom name="7" />
      <Buttom name="8" />
      <Buttom name="9" />
      <Buttom name="X" />
    </div>
    <div>
      <Buttom name="4" />
      <Buttom name="5" />
      <Buttom name="6" />
      <Buttom name="-" />
    </div>
    <div>
      <Buttom name="3" />
      <Buttom name="2" />
      <Buttom name="1" />
      <Buttom name="+" />
    </div>
    <div>
      <Buttom name="0" />
      <Buttom name="." />
      <Buttom name="=" />
    </div>
  </>
);

export default ButtonPanel;
