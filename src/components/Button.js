import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import styled from 'styled-components';

const ButtonText = styled.button`
  width: ${(props) => (props.name === '0' ? '50%' : '25%')};
  background-color: ${(props) => (props.name === '-' || props.name === 'X' || props.name === '+' || props.name === '=' || props.name === '÷' ? 'orangered' : 'lightgray')};
`;

const Button = (props) => {
  const handleClick = (buttonName) => {
    props.handleClick(buttonName);
  };

  const { name } = props;

  return (
    <ButtonText
      name={name}
      className={name === '0' ? 'button_0' : 'button'}
      onClick={() => {
        handleClick(name);
      }}
      type="button"
    >
      <h3>{name}</h3>
    </ButtonText>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
