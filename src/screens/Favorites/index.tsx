import React from 'react';
import { LayoutProperties } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Favorites() {
  return (
    <LayoutProperties>
      <Favorites.Container>
        <Header />
        <Body />
      </Favorites.Container>
    </LayoutProperties>
  );
}

Favorites.Container = styled.div`
background-color: #1d202d;
`;

export default Favorites;
