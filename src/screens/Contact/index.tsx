import React from 'react';
import styled from 'styled-components';
import { Layout, ContactForm, DownloadApp } from '../../components';
import { ContactComponent } from '../../components/Layout/Footer/components';
import Background from '../../assets/images/second-section-picture.png';

function Contact() {
  return (
    <Layout>
      <Contact.Container>
        <Contact.FormInformation>
          <Contact.Title>¿Dudas? Contáctanos</Contact.Title>
          <ContactForm />
        </Contact.FormInformation>
        <Contact.AddressInformation>
          <ContactComponent dark withOutTitle />
          <Contact.Download>
            <DownloadApp />
          </Contact.Download>
        </Contact.AddressInformation>
      </Contact.Container>
    </Layout>
  );
}

Contact.Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0px 100px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

//Form styles
Contact.FormInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
`;
Contact.Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
`;

//Address styles
Contact.AddressInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

Contact.Download = styled.div`
  margin-top: 30px;
`;

export default Contact;
