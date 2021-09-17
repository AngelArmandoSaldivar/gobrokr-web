import React from 'react';
import { Layout } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Property() {
  return (
    <Layout>
      <Property.Container>
        <Header />
        <Body />
      </Property.Container>
    </Layout>
  );
}

Property.Container = styled.div``;

export default Property;
