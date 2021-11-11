import React from 'react';
import { LayoutProperties } from '../../components';
import { Header, Body } from './components';
import styled from 'styled-components';

function Community() {
  return (
    <LayoutProperties>
      <Community.Container>
        <Header />       
      </Community.Container>
    </LayoutProperties>
  );
}

Community.Container = styled.div`
background-color: #1d202d;
padding: 50px 60px;
`;

export default Community;
