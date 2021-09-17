import React from 'react';
import styled from 'styled-components';
import { DownloadAppProps, DownloadIconProps } from './types';
import PlayStore from '../../assets/images/play-store.png';
import AppStore from '../../assets/images/app-store.png';

function DownloadApp(props: DownloadAppProps) {
  const { backgroundColor = 'rgba(34, 37, 46, 0.4)' } = props;
  return (
    <DownloadApp.Container backgroundColor={backgroundColor}>
      <DownloadApp.Text>
        Descarga nuestra App y aprovecha todos los beneficios que te ofrecemos
      </DownloadApp.Text>
      <DownloadApp.Icons>
        <DownloadApp.Icon src={PlayStore} />
        <DownloadApp.Icon src={AppStore} isLast />
      </DownloadApp.Icons>
    </DownloadApp.Container>
  );
}

DownloadApp.Container = styled.div<DownloadAppProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 30px;
  max-width: 380px;
`;
DownloadApp.Text = styled.h2`
  color: white;
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
DownloadApp.Icons = styled.div``;
DownloadApp.Icon = styled.img<DownloadIconProps>`
  margin-right: ${({ isLast }) => (isLast ? '0px' : '15px')};

  @media (max-width: 768px) {
    width: 92px;
    height: 28.5px;
  }
`;

export default DownloadApp;
