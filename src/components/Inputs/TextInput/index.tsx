import React from 'react';
import styled from 'styled-components';
import { TextInputProps, InputProps } from './types';

function TextInput(props: TextInputProps) {
  const { value, placeholder, onChange } = props;

  const handleChange = (text: string) => {
    onChange(text);
  };

  return (
    <TextInput.Input
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

TextInput.Input = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  background-color: transparent;
  padding: 17px 20px;
  border: 1px solid #4edebd;
  box-sizing: border-box;
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;

  ::-webkit-input-placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default TextInput;
