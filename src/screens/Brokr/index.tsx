import React from 'react';
import { Layout } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Brokr() {
  return (
    <Layout>
      <Brokr.Container>
        <Header />
        <Body />
      </Brokr.Container>
    </Layout>
  );
}

Brokr.Container = styled.div`
background-color: #1d202d;
`;

export default Brokr;
