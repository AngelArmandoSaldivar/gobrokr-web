import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../../../../components';

function ContactUs() {
  return (
    <ContactUs.Container>
      <ContactUs.Title>¿Dudas? Contáctanos</ContactUs.Title>
      <ContactUs.Form>
        <ContactForm />
      </ContactUs.Form>
    </ContactUs.Container>
  );
}

ContactUs.Container = styled.div`
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
  margin-top: -12px;
  background-color: #1d202d;
  padding: 50px 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;
ContactUs.Title = styled.h1`
  color: #e5b88e;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
ContactUs.Form = styled.div`
  display: flex;
  width: 50%;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default ContactUs;
