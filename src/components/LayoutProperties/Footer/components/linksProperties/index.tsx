import React from 'react';
import styled from 'styled-components';

function LinksComponent() {
  return (
    <LinksComponent.Container>
      <LinksComponent.Title>Navegar</LinksComponent.Title>
      <LinksComponent.Option>
        <LinksComponent.Text>Inicio</LinksComponent.Text>
      </LinksComponent.Option>
      <LinksComponent.Option>
        <LinksComponent.Text>Venta</LinksComponent.Text>
      </LinksComponent.Option>
      <LinksComponent.Option>
        <LinksComponent.Text>Renta</LinksComponent.Text>
      </LinksComponent.Option>
      <LinksComponent.Option>
        <LinksComponent.Text>Desarrollo</LinksComponent.Text>
      </LinksComponent.Option>
      <LinksComponent.Option>
        <LinksComponent.Text>Contacto</LinksComponent.Text>
      </LinksComponent.Option>
      <LinksComponent.Option>
        <LinksComponent.Text>Brokrs</LinksComponent.Text>
      </LinksComponent.Option>
    </LinksComponent.Container>
  );
}

LinksComponent.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
`;
LinksComponent.Option = styled.div`
  display: flex;
`;
LinksComponent.Title = styled.h4`
  color: #e5b88e;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;
LinksComponent.Text = styled.p`
  color: white;
  font-weight: lighter;
  font-size: 14px;
  margin-bottom: 5px;

  &:hover {
    color: #4fe3c1;
  }
`;

export default LinksComponent;
