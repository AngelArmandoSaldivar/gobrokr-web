import React from 'react';
import styled from 'styled-components';
import { ResultsProps } from './types';
import { EstateCard } from '../../../../components';

function Results(props: ResultsProps) {
  const { data } = props;

  return (
    <Results.Container>
      <Results.TitleContainer>
        <Results.Title>Resultado de la Busqueda</Results.Title>
        <Results.Save>Guardar</Results.Save>
      </Results.TitleContainer>
      <Results.Options>
        {data.map((item: any) => {
          return <EstateCard />;
        })}
      </Results.Options>
    </Results.Container>
  );
}

Results.Container = styled.div`
  width: 100%;
  padding: 0px 50px;
`;
Results.TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;
Results.Save = styled.button`
  padding: 15px 50px;
  background: transparent;
  color: white;
  border: 1px solid #4edebd;
  border-radius: 10px;
  margin-left: 30px;
  transition: all 0.3s ease;
  font-weight: bold;
  &:hover {
    color: black;
    background-color: #4edebd;
  }
  &:focus {
    outline: none;
  }
`;
Results.Title = styled.h2`
  font-size: 36px;
  color: #e5b88e;
  font-weight: bold;
  margin-right: 30px;
`;
Results.Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  > div {
    margin-bottom: 30px;
  }
`;

export default Results;