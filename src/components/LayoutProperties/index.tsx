import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarProperties from './NavbarProperties';
import Footer from './Footer';
import { SignInModal } from '../Credentials';
import { useLockBodyScroll } from 'react-use';

//Whatsapp widget dependencies
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

interface LayoutPropertiesProps {
  children: React.ReactNode;
}

function LayoutProperties(props: LayoutPropertiesProps) {
  const [credentialsModal, setCredentialsModal] = useState(false);
  useLockBodyScroll(credentialsModal);
  const { children } = props;

  return (
    <LayoutProperties.Wrapper>
      <NavbarProperties onOpenModal={() => setCredentialsModal(true)} />      
      <LayoutProperties.Container>
        {children}
        <Footer />
        <LayoutProperties.WhatsappContainer>
          <WhatsAppWidget
            phoneNumber="5610249771"
            companyName="Soporte GoBrokr"
            textReplyTime="Normalmente se responde en menos de 12 horas"
            message="Hola, como puedo ayudarte?"
            sendButton="Enviar"
            placeholder="Escriba algo"
          />
        </LayoutProperties.WhatsappContainer>
      </LayoutProperties.Container>

      <SignInModal
        isOpen={credentialsModal}
        onClose={() => setCredentialsModal(false)}
      />
    </LayoutProperties.Wrapper>
  );
}

LayoutProperties.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
LayoutProperties.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

LayoutProperties.WhatsappContainer = styled.div`
  bottom: 0px;
  right: 0px;
  position: fixed;
`;

export default LayoutProperties;
