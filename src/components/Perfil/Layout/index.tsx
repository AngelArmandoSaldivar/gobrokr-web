import React from 'react';
import styled from 'styled-components';
import { CredentialsProps } from './types';
import CloseIcon from '../../../assets/icons/close-icon.svg';

function Layout(props: CredentialsProps) {
  const { children, title, isOpen, onClose, isFullScreen = false } = props;

  return (
    <Layout.Container isOpen={isOpen}>
      <Layout.Overlay fullScreen={isFullScreen}>
        <Layout.CloseModal fullScreen={isFullScreen}>
          <Layout.Close onClick={onClose} isOpen={isOpen}>
            <Layout.Icon src={CloseIcon} />
          </Layout.Close>
        </Layout.CloseModal>
        <Layout.Box isOpen={isOpen} fullScreen={isFullScreen}>
          <Layout.TitleContainer>
            <Layout.Title>{title}</Layout.Title>
          </Layout.TitleContainer>
          <Layout.InputsContainer>{children}</Layout.InputsContainer>
        </Layout.Box>
      </Layout.Overlay>
    </Layout.Container>
  );
}

Layout.Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-999')};
`;

//overlay
Layout.Overlay = styled.div<{ fullScreen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ fullScreen }) =>
    fullScreen ? '#1D202D' : 'rgba(29, 32, 45, 0.9)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

//close styles
Layout.CloseModal = styled.div<{ fullScreen: boolean }>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${({ fullScreen }) => (fullScreen ? '0px' : '70px')};
  padding: 40px 0px;
`;
Layout.Close = styled.button<{ onClick: any; isOpen: boolean }>`
  background: transparent;
  border: none;
  margin-right: 40px;
  cursor: pointer;
  transition: transform 0.7s ease;
  transform: ${({ isOpen }) =>
    isOpen
      ? 'translate(0, 0) rotate(0deg)'
      : 'translate(500px, 0px) rotate(360deg)'};

  &:focus {
    outline: none;
  }
`;
Layout.Icon = styled.img``;

//box styles
Layout.Box = styled.div<{ isOpen: boolean; fullScreen: boolean }>`
  width: ${({ fullScreen }) => (fullScreen ? '80%' : '30%')};
  background: ${({ fullScreen }) =>
    fullScreen ? 'transparent' : 'rgba(34, 37, 46, 0.9)'};
  box-shadow: ${({ fullScreen }) =>
    fullScreen ? 'none' : '0px 4px 20px rgba(0, 0, 0, 0.25)'};
  border-radius: 10px;
  padding: 30px;
  transition: transform 0.7s ease;
  transform: ${({ isOpen }) =>
    isOpen ? 'translate(0, 0)' : 'translate(0, 500px)'};
`;
Layout.InputsContainer = styled.div``;
Layout.TitleContainer = styled.div`
  text-align: center;
`;
Layout.Title = styled.h2`
  color: #e5b88e;
  font-weight: bold;
  font-size: 20px;
`;

export default Layout;
