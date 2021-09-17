import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { SignInModal } from '../Credentials';
import { useLockBodyScroll } from 'react-use';

//Whatsapp widget dependencies
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const [credentialsModal, setCredentialsModal] = useState(false);
  useLockBodyScroll(credentialsModal);
  const { children } = props;

  return (
    <Layout.Wrapper>
      <Navbar onOpenModal={() => setCredentialsModal(true)} />      
      <Layout.Container>
        {children}
        <Footer />
        <Layout.WhatsappContainer>
          <WhatsAppWidget
            phoneNumber="5610249771"
            companyName="Soporte Angel"
            textReplyTime="Normalmente se responde en menos de 12 horas"
            message="Hola, como puedo ayudarte?"
            sendButton="Enviar"
            placeholder="Escriba algo"
          />
        </Layout.WhatsappContainer>
      </Layout.Container>

      <SignInModal
        isOpen={credentialsModal}
        onClose={() => setCredentialsModal(false)}
      />
    </Layout.Wrapper>
  );
}

Layout.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
Layout.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

Layout.WhatsappContainer = styled.div`
  bottom: 0px;
  right: 0px;
  position: fixed;
`;

export default Layout;
