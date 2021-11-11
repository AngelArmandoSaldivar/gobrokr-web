import React from 'react';
import styled from 'styled-components';
import AppStore from '../../../../../assets/images/app-store.png';
import PlayStore from '../../../../../assets/images/play-store.png';

function DownloadComponent() {
  return (
    <DownloadComponent.Container>
      <DownloadComponent.Title>DESCARGAR APP</DownloadComponent.Title>
      <DownloadComponent.Option>
        <DownloadComponent.Image src={AppStore} />
      </DownloadComponent.Option>
      <DownloadComponent.Option>
        <DownloadComponent.Image src={PlayStore} />
      </DownloadComponent.Option>
    </DownloadComponent.Container>
  );
}

DownloadComponent.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
`;
DownloadComponent.Option = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
DownloadComponent.Title = styled.h4`
  color: #e5b88e;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;
DownloadComponent.Image = styled.img``;

export default DownloadComponent;
