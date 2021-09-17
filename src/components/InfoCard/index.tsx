import React from 'react';
import styled from 'styled-components';
import { InfoCardProps } from './types';
import Star from '../../assets/icons/star.svg';
import Placeholder from '../../assets/images/background-third.png';

function InfoCard(props: InfoCardProps) {
  const { title, description, image = Placeholder, price = 0 } = props;
  return (
    <InfoCard.Container>
      <InfoCard.ImageContainer backgroundImage={image}>
        <InfoCard.Icon src={Star} />
        <InfoCard.Title>{title}</InfoCard.Title>
      </InfoCard.ImageContainer>
      <InfoCard.DescriptionContainer>
        <InfoCard.Price>
          {price <= 0 ? 'Gratis' : `$${price} pesos al mes`}
        </InfoCard.Price>
        <InfoCard.Description>{description}</InfoCard.Description>
      </InfoCard.DescriptionContainer>
    </InfoCard.Container>
  );
}

InfoCard.Container = styled.div`
  width: 240px;
  height: 320px;
  border-radius: 30px;
  background-color: #1d202d;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 95%;
  }

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  }
`;

// image styles
InfoCard.ImageContainer = styled.div<{ backgroundImage: string }>`
  height: 105px;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
InfoCard.Icon = styled.img`
  width: 40px;
  height: 40px;
`;
InfoCard.Title = styled.h1`
  color: #e0b992;
  font-size: 30px;
  font-weight: bold;
  margin: 0px;
  margin-top: 5px;
`;

//description styles
InfoCard.DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0px;
`;
InfoCard.Price = styled.h2`
  color: #4fe3c1;
  font-size: 14px;
  font-weight: bold;
`;
InfoCard.Description = styled.p`
  color: white;
  font-size: 15px;
  font-weight: lighter;
`;

export default InfoCard;
