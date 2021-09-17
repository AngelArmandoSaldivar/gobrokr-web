import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../../assets/images/logo.svg';

function LogoComponent() {
  return (
    <LogoComponent.Container>
      <LogoComponent.Logo src={Logo} />
      <LogoComponent.Text>
        GOBROKR se compromete a brindar un alto nivel de experiencia, servicio
        al cliente y atención al detalle para el marketing y las ventas de
        bienes raíces de lujo y propiedades de alquiler.
      </LogoComponent.Text>
    </LogoComponent.Container>
  );
}

LogoComponent.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
`;
LogoComponent.Logo = styled.img``;
LogoComponent.Text = styled.p`
  color: white;
  margin-top: 50px;
  line-height: 25px;
  font-size: 14px;
`;

export default LogoComponent;
