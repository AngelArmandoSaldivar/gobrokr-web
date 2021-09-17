import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../components';
import {
  Hero,
  FirstSection,
  SecondSection,
  ThirdSection,
  ContactUs
} from './components';

function Home() {

  console.log('Local Storage remove: ', localStorage.getItem('token'));
  localStorage.removeItem('token');

  return (
    <Layout>
      <Home.Container>
        <Hero />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ContactUs />
      </Home.Container>
    </Layout>
  );
}

Home.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
