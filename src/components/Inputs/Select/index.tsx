import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectProps, DataProps } from './types';
import ArrownDown from '../../../assets/icons/down-arrow.svg';
import { isEmpty } from 'ramda';

function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const { value, placeholder, onChange, data = [] } = props;
  const emptyValue = value === -1 || isEmpty(value);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (itemSelected: DataProps) => {
    onChange(itemSelected);
    setOpen(false);
  };

  return (
    <Select.Input>
      <Select.InfoContainer onClick={handleOpen}>
        <Select.Placeholder>
          {emptyValue ? placeholder : value?.name ?? value}
        </Select.Placeholder>
        <Select.Icon src={ArrownDown} isOpen={open} />
      </Select.InfoContainer>
      <Select.OptionContainer isOpen={open}>
        {data.map((item: DataProps, index: number) => (
          <Select.Option key={index} onClick={() => handleSelect(item)}>
            {item.name}
          </Select.Option>
        ))}
      </Select.OptionContainer>
    </Select.Input>
  );
}

Select.Input = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  background-color: transparent;
  border: 1px solid #4edebd;
  box-sizing: border-box;
  border-radius: 10px;
`;

Select.InfoContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  height: 50px;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;
Select.Placeholder = styled.span`
  font-size: 13px;
`;
Select.Icon = styled.img<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
Select.OptionContainer = styled.div<{ isOpen: boolean }>`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  position: absolute;
  background-color: #4edebd;
  border: 1px solid #4edebd;
  border-radius: 10px;
  width: 100%;
  transition: all 0.5s ease;
  z-index: ${({ isOpen }) => (isOpen ? '10' : '-10')};
  top: ${({ isOpen }) => (isOpen ? '60px' : '50px')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;
Select.Option = styled.button`
  display: flex;
  padding: 10px 20px;
  background: transparent;
  width: 100%;
  border: none;
  color: black;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #38b096;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default Select;
