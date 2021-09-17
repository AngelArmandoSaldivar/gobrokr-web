import React, {Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import ExampleState from '../../assets/images/example-estate.png';
import { EstateCardProps } from './types';
import { UserInfo } from './components';
import { Link, LinkProps } from 'react-router-dom';
import axios from '../../api/index';
import { Populars } from '../../screens';

function EstateCard(props: EstateCardProps) {  

  return (
    <EstateCard.Container>
     <EstateCard.ImageContainer>
          <EstateCard.PriceContainer>
            <EstateCard.Price>{17000}</EstateCard.Price>
          </EstateCard.PriceContainer>
        </EstateCard.ImageContainer><EstateCard.InformationContainer>
            <UserInfo />
            <EstateCard.EstateInfo>
              <EstateCard.EstateTitle>
                En venta Casa Desarrollo en Playa del Carmen
              </EstateCard.EstateTitle>
              <EstateCard.EstateDescription>
                Casa con acabados de lujo dentro del exclusivo residencia....
              </EstateCard.EstateDescription>
            </EstateCard.EstateInfo>
            <EstateCard.LinksContainer>
              <EstateCard.Comission>Comisión: 5%-(50/50)</EstateCard.Comission>
              <EstateCard.Link to="/property/12">Ver</EstateCard.Link>
            </EstateCard.LinksContainer>
          </EstateCard.InformationContainer>
    </EstateCard.Container>
  );
}

EstateCard.Container = styled.div`
  width: 275px;
  background: #1d202d;
  transition: box-shadow 0.3s ease;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  }
`;

// image styles
EstateCard.ImageContainer = styled.div`
  height: 160px;
  background-image: url(${ExampleState});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 30px 30px 0px 0px;
  padding: 12px;
`;

EstateCard.PriceContainer = styled.div`
  max-height: 20px;
  padding: 4px 15px;
  background: #4fe3c1;
  box-shadow: inset 0px 4px 4px rgba(120, 117, 117, 0.25);
  border-radius: 30px;
`;
EstateCard.Price = styled.span`
  color: #1d202d;
  font-size: 15px;
  font-weight: bold;
`;

// information styles
EstateCard.InformationContainer = styled.div`
  padding: 10px 20px;
  background-color: #1d202d;
  border-radius: 30px;
`;

// State info styles
EstateCard.EstateInfo = styled.div`
  margin-top: 10px;
`;
EstateCard.EstateTitle = styled.p`
  color: #4dd9b9;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;
EstateCard.EstateDescription = styled.p`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  margin-top: 5px;
`;

// Links style
EstateCard.LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
EstateCard.Comission = styled.span`
  font-size: 13px;
  color: #e5b88e;
`;
EstateCard.Link = styled(Link)<{ to: string }>`
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e5b88e;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export default EstateCard;