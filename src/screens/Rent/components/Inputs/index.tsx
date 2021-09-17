import React from 'react';
import styled from 'styled-components';
import { Select, TextInput } from '../../../../components';
import { fakeData, fakeDataNumber } from '../../data';
import { DataProps } from '../../../../components/Inputs/Select/types';
import { InputsProps } from './types';
import Slider from '@material-ui/core/Slider';
import './styles/index.css';

function Inputs(props: InputsProps) {
  const { values, setFieldValue } = props;

  console.log('Range: ', values);

  return (
    <Inputs.Container>
      <TextInput
        onChange={(text: string) => setFieldValue('address', text)}
        placeholder="¿Dónde buscar?"
        value={values.address}
      />
      <Select
        placeholder="¿Casa o Departamento?"
        data={fakeData}
        value={values.propertyType}
        onChange={(e: DataProps) => setFieldValue('propertyType', e)}
      />
      <Inputs.PriceRange>
        <Inputs.PriceRangeTitle>Rango de precio:</Inputs.PriceRangeTitle>
        <Slider
          min={1000}
          max={30000}
          color="primary"
          value={values.priceRange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </Inputs.PriceRange>

      <Select
        placeholder="Número de recámaras"
        data={fakeDataNumber}
        value={values.numberOfBedrooms}
        onChange={(e: DataProps) =>
          setFieldValue('numberOfBedrooms', parseInt(e.name))
        }
      />
      <Select
        placeholder="Número de baños"
        data={fakeDataNumber}
        value={values.numberOfBathrooms}
        onChange={(e: DataProps) =>
          setFieldValue('numberOfBathrooms', parseInt(e.name))
        }
      />
      <Select
        placeholder="Tipo de Brokr"
        data={fakeData}
        value={values.brokrType}
        onChange={(e: DataProps) => setFieldValue('brokrType', e)}
      />
      <Select
        placeholder="Ranking del Brokr"
        data={fakeDataNumber}
        value={values.brokrRank}
        onChange={(e: DataProps) =>
          setFieldValue('brokrRank', parseInt(e.name))
        }
      />
      <Select
        placeholder="Metros de construcción"
        data={fakeData}
        value={values.constructionMeters}
        onChange={(e: DataProps) => setFieldValue('constructionMeters', e)}
      />
      <Select
        placeholder="Estacionamientos"
        data={fakeDataNumber}
        value={values.parkinLots}
        onChange={(e: DataProps) =>
          setFieldValue('parkinLots', parseInt(e.name))
        }
      />
    </Inputs.Container>
  );
}

Inputs.PriceRange = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0px;
`;
Inputs.PriceRangeTitle = styled.span`
  color: white;
  font-size: 13px;
`;

Inputs.Container = styled.div`
  margin-top: 10px;

  > div,
  input {
    margin-bottom: 15px;
  }
`;

export default Inputs;
