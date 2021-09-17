import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';

function ButtonComponent(props: ButtonProps) {
  const {
    children,
    color = '#e5b88e',
    textColor = '#fff',
    size = 'small',
    marginRight = '0px',
    marginLeft = '0px',
    marginTop = '0px',
    marginBottom = '0px',
    cursor= 'pointer',
    onClick
  } = props;
  return (
    <ButtonComponent.Container
      onClick={onClick}
      color={color}
      textColor={textColor}
      size={size}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      cursor={cursor}
    >
      {children}
    </ButtonComponent.Container>
  );
}

ButtonComponent.Container = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ size }) =>
    size === 'small' ? '17px 40px' : size === 'large' && '17px 80px'};
  box-shadow: inset 0px 4px 10px rgb(0 0 0 / 25%);
  border-radius: 10px;
  width: 100%;
  border: 0px;
  font-size: 13px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export default ButtonComponent;
