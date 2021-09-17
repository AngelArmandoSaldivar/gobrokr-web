import React from 'react';
import styled from 'styled-components';
import Background from '../../../../assets/images/hero-background.png';
import { HeroContainerProps } from '../../types';
import { Search, DownloadApp } from '../../../../components';

function Hero() {
  return (
    <Hero.Container>
      <Hero.Information>
        <DownloadApp />
      </Hero.Information>
      <Hero.Search>
        <Search />
      </Hero.Search>
    </Hero.Container>
  );
}

Hero.Container = styled.div<HeroContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  padding: 0px 70px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 0px 10px;
    justify-content: center;
  }
`;

//information styles
Hero.Information = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 0px 40px;
    margin-bottom: 50px;
  }
`;

// search styles
Hero.Search = styled.div`
  display: flex;
  justify-content: center;
`;

export default Hero;
