import React from 'react';
import styled from 'styled-components';
import Image from '../../../../assets/images/property/principal.png';
import Image1 from '../../../../assets/images/property/lateral-1.png';
import Image2 from '../../../../assets/images/property/lateral-2.png';

function Header() {
  return (
    <Header.Container>
      <Header.ImgCol>
        <Header.MainImg src={Image} />
      </Header.ImgCol>
      <Header.ImgCol>
        <Header.AltImg src={Image1} />
        <Header.AltImg src={Image2} />
      </Header.ImgCol>
      <Header.Actions>
        <Header.PriceContainer>
          <Header.Price>
            <Header.PriceText>$900.000</Header.PriceText>
          </Header.Price>
        </Header.PriceContainer>
        <Header.GalleryContainer>
          <Header.GalleryButton>Ver Galeria</Header.GalleryButton>
        </Header.GalleryContainer>
      </Header.Actions>
    </Header.Container>
  );
}

Header.Container = styled.div`
  display: flex;
  height: 70vh;
  position: relative;
`;

// Actions
Header.Actions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
`;
Header.PriceContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
Header.Price = styled.div`
  padding: 10px 40px;
  align-items: center;
  justify-content: center;
  background: #4fe3c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
Header.PriceText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;
Header.GalleryContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
Header.GalleryButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 15px 40px;
  background: #4fe3c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

//Images
Header.ImgCol = styled.div`
  width: 50%;
  height: 100%;
`;
Header.MainImg = styled.img`
  width: 100%;
  height: 100%;
`;
Header.AltImg = styled.img`
  width: 100%;
  height: 50%;
  flex: 1;
  display: flex;
`;

export default Header;
