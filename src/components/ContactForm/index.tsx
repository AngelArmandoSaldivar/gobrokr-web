import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function ContactForm() {
  return (
    <ContactForm.Container>
      <ContactForm.InputsContainer>
        <ContactForm.TextInput placeholder={'Nombre'} />
        <ContactForm.TextInput placeholder={'Email'} type="email" />
        <ContactForm.TextInput placeholder={'Teléfono'} type="number" />
        <ContactForm.TextArea placeholder={'Mensaje'} rows={10} />
      </ContactForm.InputsContainer>
      <ContactForm.SubmitContainer>
        <Button textColor="#1D202D">Enviar</Button>
      </ContactForm.SubmitContainer>
    </ContactForm.Container>
  );
}

ContactForm.Container = styled.div`
  width: 100%;
`;
ContactForm.InputsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
ContactForm.TextInput = styled.input`
  max-width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  border: none;
  margin-bottom: 10px;
  color: #1d202d;
  font-size: 15px;
  padding: 0px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: lighter;

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px #4fe3c1;
  }
`;
ContactForm.TextArea = styled.textarea`
  max-width: 100%;
  border-radius: 10px;
  background-color: white;
  border: none;
  padding: 10px;
  resize: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px #4fe3c1;
  }
`;
ContactForm.SubmitContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export default ContactForm;
