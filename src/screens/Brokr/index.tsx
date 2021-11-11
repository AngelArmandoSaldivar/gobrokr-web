import React from 'react';
import { LayoutProperties } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Brokr() {
  return (
    <LayoutProperties>
      <Brokr.Container>
        <Header />
        <Body />
      </Brokr.Container>
    </LayoutProperties>
  );
}

Brokr.Container = styled.div`
background-color: #1d202d;
`;

export default Brokr;
