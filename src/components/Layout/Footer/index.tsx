import React from 'react';
import styled from 'styled-components';
import CopyRight from './copyRight';

import {
  LogoComponent,
  ContactComponent,
  LinksComponent,
  DownloadComponent
} from './components';

//types
import { ColumnProps } from './types';

function Footer() {
  return (
    <Footer.Container>
      <Footer.Links>
        <Footer.Column>
          <LogoComponent />
        </Footer.Column>
        <Footer.Column>
          <ContactComponent />
        </Footer.Column>
        <Footer.Column>
          <LinksComponent />
        </Footer.Column>
        <Footer.Column>
          <DownloadComponent />
        </Footer.Column>
      </Footer.Links>
      <CopyRight />
    </Footer.Container>
  );
}

Footer.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.Logo = styled.img`
  width: 153px;
  height: 48px;
`;
Footer.Links = styled.div`
  display: flex;
  padding: 80px 150px;
  background-color: #151a29;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0px;
  }
`;
Footer.Column = styled.div<ColumnProps>`
  width: 25%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Footer;
