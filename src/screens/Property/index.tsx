import React from 'react';
import { LayoutProperties } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Property() {
  return (
    <LayoutProperties>
      <Property.Container>
        <Header />
        <Body />
      </Property.Container>
    </LayoutProperties>
  );
}

Property.Container = styled.div``;

export default Property;
