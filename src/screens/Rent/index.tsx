import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../components';
import { UbicationButton } from '../../components/Search/components';
import { ButtonComponent as Button } from '../../components';
import { Formik, FormikProps, FormikValues } from 'formik';
import { initialValues } from './formik';
import { Inputs, Results } from './components';

function Rent() {
  return (
    <Layout>
      <Rent.Container>
        <Formik
          initialValues={initialValues}
          onSubmit={(e: FormikValues) => console.log(e)}
        >
          {(props: FormikProps<FormikValues>) => {
            const { values, setFieldValue, handleSubmit, resetForm } = props;
            return (
              <Rent.FilterContainer>
                <Rent.Filters>
                  <Rent.TitleContainer>
                    <Rent.Title>No busques, encuentra.</Rent.Title>
                    <UbicationButton />
                  </Rent.TitleContainer>
                  <Inputs
                    values={values}
                    setFieldValue={(key: string, value: any) =>
                      setFieldValue(key, value)
                    }
                  />
                  <Rent.Actions>
                    <Rent.CleanFilters onClick={resetForm}>
                      Borrar Filtros
                    </Rent.CleanFilters>
                    <Button onClick={handleSubmit}>Buscar</Button>
                  </Rent.Actions>
                </Rent.Filters>
              </Rent.FilterContainer>
            );
          }}
        </Formik>
        <Rent.ResultContainer>
          <Results
            data={[
             {},
             {},
             {},
            ]}
          />
        </Rent.ResultContainer>
      </Rent.Container>
      );
    </Layout>
  );
}

Rent.Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 30px;
  background-color: #1d202d;
  margin-bottom: -20px;
`;

//filter styles
Rent.FilterContainer = styled.div`
  width: 20%;
`;
Rent.Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #22252e;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 30px 20px;
`;

Rent.TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Rent.Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #4fe3c1;
  text-align: center;
`;

Rent.Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
Rent.CleanFilters = styled.button<{ onClick: any }>`
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: #ff0000;
  text-transform: uppercase;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
`;

// results styles
Rent.ResultContainer = styled.div`
  display: flex;
  width: 75%;
`;

export default Rent;