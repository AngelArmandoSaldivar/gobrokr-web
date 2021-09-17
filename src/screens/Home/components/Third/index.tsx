import React from 'react';
import styled from 'styled-components';
import { InfoCard } from '../../../../components';
import Background from '../../../../assets/images/background-third.png';

function ThirdSection() {
  return (
    <ThirdSection.Container>
      <ThirdSection.TitleContainer>
        <ThirdSection.Title>
          Toma el control y optimiza la calidad <br /> de tu servicio.
        </ThirdSection.Title>
        <ThirdSection.Description>
          Gobrokr tiene para ti diferentes membresías, elige la que mejor se
          adapte a tus necesidades.
        </ThirdSection.Description>
      </ThirdSection.TitleContainer>
      <ThirdSection.Cards>
        <InfoCard
          price={0}
          title="GoFeel"
          description="Publica hasta 5 propiedades y realiza transacciones de compreventa y/o renta de manera más rápida formando parte de la gran comunidad de asesores inmobiliarios.Cuenta personal."
        />
        <InfoCard
          price={140}
          title="GoFeel"
          description="Publica hasta 5 propiedades y realiza transacciones de compreventa y/o renta de manera más rápida formando parte de la gran comunidad de asesores inmobiliarios.Cuenta personal."
        />
        <InfoCard
          price={140}
          title="GoFeel"
          description="Publica hasta 5 propiedades y realiza transacciones de compreventa y/o renta de manera más rápida formando parte de la gran comunidad de asesores inmobiliarios.Cuenta personal."
        />
        <InfoCard
          price={140}
          title="GoFeel"
          description="Publica hasta 5 propiedades y realiza transacciones de compreventa y/o renta de manera más rápida formando parte de la gran comunidad de asesores inmobiliarios.Cuenta personal."
        />
        <InfoCard
          price={140}
          title="GoFeel"
          description="Publica hasta 5 propiedades y realiza transacciones de compreventa y/o renta de manera más rápida formando parte de la gran comunidad de asesores inmobiliarios.Cuenta personal."
        />
      </ThirdSection.Cards>
    </ThirdSection.Container>
  );
}

ThirdSection.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -12px;
  background-color: #fff;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 50px 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

//title styles
ThirdSection.TitleContainer = styled.div``;
ThirdSection.Title = styled.h1`
  color: #4fe3c1;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
ThirdSection.Description = styled.p`
  color: white;
  font-weight: lighter;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

//infocard styles
ThirdSection.Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 95%;
  }

  > div {
    margin: 30px 50px;

    @media (max-width: 768px) {
      margin: 30px 0px;
    }
  }
`;

export default ThirdSection;
