import React from 'react';
import styled from 'styled-components';

//types
import { ColumnProps } from './types';

function CopyRight() {
  return (
    <CopyRight.Container>
      <CopyRight.Column>
        <CopyRight.Text>© Copyright GOBROKR 2020</CopyRight.Text>
      </CopyRight.Column>
      <CopyRight.Column alignRight>
        <CopyRight.Text>
          Términos y condiciones de Uso Términos y Condiciones de Contratación
          Política de privacidad
        </CopyRight.Text>
      </CopyRight.Column>
    </CopyRight.Container>
  );
}

CopyRight.Container = styled.div`
  display: flex;
  align-items: center;
  background: #1d202d;
  padding: 30px 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;
CopyRight.Text = styled.h5`
  color: white;
  font-weight: lighter;
  font-size: 15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 10px 0px;
  }
`;
CopyRight.Column = styled.div<ColumnProps>`
  display: flex;
  flex: 1;
  justify-content: ${({ alignRight }) =>
    alignRight ? 'flex-end' : 'flex-start'};
`;

export default CopyRight;
