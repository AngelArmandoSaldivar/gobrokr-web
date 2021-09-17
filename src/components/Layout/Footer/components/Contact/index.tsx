import React from 'react';
import styled from 'styled-components';
import Email from '../../../../../assets/icons/footer-email.svg';
import Phone from '../../../../../assets/icons/footer-phone.svg';
import Address from '../../../../../assets/icons/footer-address.svg';
import { ContactInformationProps } from './types';

function ContactComponent(props: ContactInformationProps) {
  const { dark, withOutTitle } = props;

  return (
    <ContactComponent.Container>
      {!withOutTitle && (
        <ContactComponent.Title>Contacto</ContactComponent.Title>
      )}
      <ContactComponent.Option>
        <ContactComponent.Icon src={Address} />
        <ContactComponent.Text dark={dark}>
          Mario Pani 750-5D1 Santa Fe, Cuajimalpa 05348 CdMx
        </ContactComponent.Text>
      </ContactComponent.Option>
      <ContactComponent.Option>
        <ContactComponent.Icon src={Phone} />
        <ContactComponent.Text dark={dark}>55 4808 8101</ContactComponent.Text>
      </ContactComponent.Option>
      <ContactComponent.Option>
        <ContactComponent.Icon src={Email} />
        <ContactComponent.Text dark={dark}>
          Contacto@gobrokr.com
        </ContactComponent.Text>
      </ContactComponent.Option>
    </ContactComponent.Container>
  );
}

ContactComponent.Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
`;
ContactComponent.Option = styled.div`
  display: flex;
  align-items: center;
`;
ContactComponent.Icon = styled.img`
  width: 20px;
  height: 20px;
`;
ContactComponent.Title = styled.h4`
  color: #e5b88e;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;
ContactComponent.Text = styled.p<{ dark?: boolean }>`
  color: ${({ dark }) => (dark ? 'black' : 'white')};
  margin-left: 20px;
  font-weight: lighter;
  line-height: 25px;
  font-size: 14px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    color: #4fe3c1;
  }
`;

export default ContactComponent;
