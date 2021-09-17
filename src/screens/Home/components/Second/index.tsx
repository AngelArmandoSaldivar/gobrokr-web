import React from 'react';
import styled from 'styled-components';
import Background from '../../../../assets/images/second-section-picture.png';
import { EstateCard } from '../../../../components';

function SecondSection() {
  return (
    <SecondSection.Container>
      <SecondSection.Title>
        Todas las propiedades disponibles <br /> cerca de ti en un botón.
      </SecondSection.Title>
      <SecondSection.Estates>
        <EstateCard />       
      </SecondSection.Estates>
    </SecondSection.Container>
  );
}

SecondSection.Container = styled.div`
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
  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

SecondSection.Title = styled.h2`
  color: #1d202d;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

SecondSection.Estates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 70%;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 95%;
  }
  > div {
    margin: 30px 50px;
    @media (max-width: 768px) {
      margin: 30px 10px;
    }
  }
`;

export default SecondSection;