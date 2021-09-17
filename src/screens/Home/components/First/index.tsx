import React from 'react';
import { DownloadApp } from '../../../../components';
import styled from 'styled-components';
import Picture from '../../../../assets/images/first-section-picture.png';

function FirstSection() {
  return (
    <FirstSection.Container>
      <FirstSection.InformationContainer>
        <FirstSection.Title>“No busques, encuentra”</FirstSection.Title>
        <FirstSection.Paragraph>
          Todo el universo de portales <br /> inmobiliarios a un click!
        </FirstSection.Paragraph>
        <FirstSection.Paragraph>
          Encuentra miles de propiedades en <br /> segundos.
        </FirstSection.Paragraph>
        <FirstSection.Paragraph>
          Ubicacion de inmuebles en tiempo real, <br /> incluso durante tu
          recorrido...
        </FirstSection.Paragraph>
        <FirstSection.DownloadContainer>
          <DownloadApp />
        </FirstSection.DownloadContainer>
      </FirstSection.InformationContainer>
      <FirstSection.PictureContainer>
        <FirstSection.Picture src={Picture} />
      </FirstSection.PictureContainer>
    </FirstSection.Container>
  );
}

FirstSection.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -12px;
  background-color: #1d202d;
  padding: 50px 100px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 50px 30px;
  }
`;

//information styles
FirstSection.InformationContainer = styled.div``;
FirstSection.DownloadContainer = styled.div`
  margin-top: 50px;
`;
FirstSection.Title = styled.h2`
  color: #e5b88e;
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;
FirstSection.Paragraph = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

//picture styles
FirstSection.PictureContainer = styled.div``;
FirstSection.Picture = styled.img`
  @media (max-width: 768px) {
    width: 216px;
    height: 167px;
  }
`;

export default FirstSection;
