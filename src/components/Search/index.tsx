import React from 'react';
import styled from 'styled-components';
import { ButtonComponent, TextInput, Select } from '../../components';
import { UbicationButton } from './components';
import { InputContainer } from './types';
import { DataProps } from '../Inputs/Select/types';
import { fakeData } from './data';
import { Formik, FormikValues, FormikProps } from 'formik';
import { initialValues } from './formik';

function Search() {
  return (
    <Search.Container>
      <Search.Buttons>
        <Search.Ubication>
          <UbicationButton />
        </Search.Ubication>
        <Search.Filters>
          <Search.Filter>
            <ButtonComponent color="#4EDEBD" textColor="#000">
              Renta
            </ButtonComponent>
          </Search.Filter>
          <Search.Filter>
            <ButtonComponent>Venta</ButtonComponent>
          </Search.Filter>
          <Search.Filter>
            <ButtonComponent>Traspaso</ButtonComponent>
          </Search.Filter>
        </Search.Filters>
      </Search.Buttons>
      <Formik
        initialValues={initialValues}
        onSubmit={(e) => console.log({ e })}
      >
        {(props: FormikProps<FormikValues>) => {
          const { values, setFieldValue } = props;
          return (
            <Search.Inputs>
              <Search.InputContainer width="40%">
                <TextInput
                  value={values.address}
                  placeholder="¿Dónde buscar?"
                  onChange={(e: any) => console.log(e.target.value)}
                />
              </Search.InputContainer>
              <Search.InputContainer width="30%">
                <Select
                  value={values.propertyType}
                  data={fakeData}
                  placeholder="Hola mundo"
                  onChange={(e: DataProps) => setFieldValue('propertyType', e)}
                />
              </Search.InputContainer>
              <Search.Submit>
                <ButtonComponent size="large">BUSCAR</ButtonComponent>
              </Search.Submit>
            </Search.Inputs>
          );
        }}
      </Formik>
    </Search.Container>
  );
}

Search.Container = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

//buttons style
Search.Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Search.Ubication = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }
`;
Search.Filters = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 45%;
    overflow-x: scroll;
  }
`;
Search.Filter = styled.div`
  margin-right: 30px;
`;

Search.Icon = styled.img`
  width: 40px;
  height: 40px;
`;

Search.Text = styled.span`
  font-size: 13px;
  color: white;
  margin-left: 12px;
`;

//inputs style
Search.Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(34, 37, 46, 0.8);
  border-radius: 0px 10px 10px 10px;
  padding: 30px 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 10px;
  }
`;
Search.InputContainer = styled.div<InputContainer>`
  width: ${({ width }) => width};
  margin-right: ${({ marginRight }) => marginRight || '0px'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;
Search.Submit = styled.div`
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export default Search;
