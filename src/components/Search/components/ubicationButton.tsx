import React from 'react';
import styled from 'styled-components';
import Address from '../../../assets/icons/footer-address.svg';

function UbicationButton() {
  return (
    <UbicationButton.Button>
      <UbicationButton.Icon src={Address} />
      <UbicationButton.Text>Cerca de mi ubicación</UbicationButton.Text>
    </UbicationButton.Button>
  );
}

UbicationButton.Button = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: rgba(34, 37, 46, 0.8);
  border-radius: 10px 10px 0px 0px;
  border: 0px;
`;

UbicationButton.Icon = styled.img`
  width: 40px;
  height: 40px;
`;

UbicationButton.Text = styled.span`
  font-size: 13px;
  color: white;
  margin-left: 12px;
`;

export default UbicationButton;
