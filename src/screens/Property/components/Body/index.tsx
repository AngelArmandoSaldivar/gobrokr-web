import React from 'react';
import styled from 'styled-components';
import BedIcon from '../../../../assets/icons/bed-icon.svg';
import BathIcon from '../../../../assets/icons/bath-icon.svg';
import MetersIcon from '../../../../assets/icons/meters-icon.svg';
import ParkinIcon from '../../../../assets/icons/parking-icon.svg';
import {
  EstateCard,
  TextInput,
  ButtonComponent as Button
} from '../../../../components';
import { UserInfo } from '../../../../components/EstateCard/components';
import { useWindowScroll } from 'react-use';

function Body() {
  const { y } = useWindowScroll();
  return (
    <Body.Container>
      <Body.Info>
        <Body.TitleContainer>
          <Body.Subtitle>Comisión 5% - 70/30 </Body.Subtitle>
          <Body.Title>Venta Departamento en Lomas Country</Body.Title>
        </Body.TitleContainer>
        <Body.FeaturesContainer>
          <Body.Subtitle>Caracteristicas</Body.Subtitle>
          <Body.Features>
            <Body.Feature>
              <Body.FeatureIcon src={BedIcon} />
              <Body.FeatureInfo>3 Habitaciones</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={BathIcon} />
              <Body.FeatureInfo>3 Banos</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={MetersIcon} />
              <Body.FeatureInfo>300mt2</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={ParkinIcon} />
              <Body.FeatureInfo>2 Estacionamientos</Body.FeatureInfo>
            </Body.Feature>
          </Body.Features>
        </Body.FeaturesContainer>
        <Body.SpecialFeaturesContainer>
          <Body.Subtitle>Caracteristicas especiales</Body.Subtitle>
          <Body.SpecialFeaturesList>
            <Body.SpecialFeaturesItem>Example 1</Body.SpecialFeaturesItem>
            <Body.SpecialFeaturesItem>Example 2</Body.SpecialFeaturesItem>
            <Body.SpecialFeaturesItem>Example 3</Body.SpecialFeaturesItem>
            <Body.SpecialFeaturesItem>Example 4</Body.SpecialFeaturesItem>
            <Body.SpecialFeaturesItem>Example 5</Body.SpecialFeaturesItem>
          </Body.SpecialFeaturesList>
        </Body.SpecialFeaturesContainer>
        <Body.UbicationContainer>
          <Body.Subtitle>Ubicación</Body.Subtitle>
          <Body.Map
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28080.21171502132!2d-80.6242720354639!3d28.3882686358038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e0a5ab39504c9b%3A0xbb0bb0f57a55d19e!2sCabo%20Ca%C3%B1averal%2C%20Florida%2032920%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1618686892265!5m2!1ses!2sco"
          />
        </Body.UbicationContainer>
        <Body.DetailsContiner>
          <Body.Subtitle>Más detalles</Body.Subtitle>
          <Body.DetailInformation>
            Excelente departamento a la renta en calle Dante (LG/js). Cuenta con
            85 mts., sala, comedor y cocina equipada con pisos de porcelanato,
            barra desayunador, recamara principal con laminado de madera, baño
            completo, walk -in closet y terraza, la segunda recamara con
            alfombra, closet y baño completo compartido para visitas, cuarto de
            lavado, mas mantenimiento incluido, 2 cajones de estacionamiento en
            tándem. Portón de acceso automatizado, roof garden con asador, lobby
            con vigilancia, elevador y escaleras de servicio. Excelente
            ventilación y muy iluminado.
          </Body.DetailInformation>
        </Body.DetailsContiner>
        <Body.MorePropertiesContainer>
          <Body.MoreTitle>Más inmuebles como este</Body.MoreTitle>
          <Body.Estates>
            <EstateCard />
            <EstateCard />
            <EstateCard />
          </Body.Estates>
        </Body.MorePropertiesContainer>
      </Body.Info>
      <Body.Contact>
        <Body.ContactForm isFixed={y >= 900}>
          <Body.BrokrInfo>
            <UserInfo textSize={'20px'} imageSize={'80px'} starsSize={'20px'} />
          </Body.BrokrInfo>
          <Body.Form>
            <TextInput
              value=""
              onChange={(e) => console.log('e')}
              placeholder="Nombre"
            />
            <TextInput
              value=""
              onChange={(e) => console.log('e')}
              placeholder="Teléfono"
            />
            <TextInput
              value=""
              onChange={(e) => console.log('e')}
              placeholder="Correo"
            />
          </Body.Form>
          <Body.TermsInfo>
            <Body.Terms>
              Al enviar, estarás aceptando los{' '}
              <a href="#">TÉRMINO Y CONDICIONES</a> DE USO de GoBrokr.{' '}
            </Body.Terms>
            <Body.Terms>
              Para obtener más información sobre la manera en que GoBrokr
              recopila, utiliza y protege tus datos personales, consulta la{' '}
              <a href="#">POLÍTICA DE PRIVACIDAD</a> de GoBrokr.
            </Body.Terms>
          </Body.TermsInfo>
          <Body.Action>
            <Button>Enviar</Button>
          </Body.Action>
        </Body.ContactForm>
      </Body.Contact>
    </Body.Container>
  );
}

Body.Container = styled.div`
  display: flex;
  background-color: #1d202d;
`;

//Info Styles
Body.Info = styled.div`
  width: 70%;
  padding: 70px;
`;
Body.TitleContainer = styled.div``;
Body.Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #4fe3c1;
`;
Body.Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: #e5b88e;
  margin-top: 5px;
`;
Body.FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
Body.Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
Body.Feature = styled.div`
  display: flex;
  align-items: center;
`;
Body.FeatureIcon = styled.img``;
Body.FeatureInfo = styled.p`
  margin-left: 15px;
  color: white;
  font-size: 16px;
`;
Body.SpecialFeaturesContainer = styled.div`
  margin-top: 60px;
`;
Body.SpecialFeaturesList = styled.ul``;
Body.SpecialFeaturesItem = styled.li`
  color: white;
  font-size: 16px;
`;
Body.UbicationContainer = styled.div`
  margin-top: 60px;
`;

Body.Map = styled.iframe`
  width: 100%;
  height: 600px;
  margin-top: 10px;
`;
Body.DetailsContiner = styled.div`
  margin-top: 60px;
`;
Body.DetailInformation = styled.p`
  font-size: 16px;
  color: white;
`;
Body.MorePropertiesContainer = styled.div`
  margin-top: 60px;
`;
Body.MoreTitle = styled.h2`
  text-align: center;
  color: #e5b88e;
  font-size: 36px;
`;

Body.Estates = styled.div`
  display: flex;
  justify-content: space-between;
`;

//Contact Styles
Body.Contact = styled.div`
  width: 30%;
  padding: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Body.ContactForm = styled.div<{ isFixed: boolean }>`
  width: 80%;
  background: #22252e;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 50px 30px;
`;

Body.BrokrInfo = styled.div`
  display: flex;
  justify-content: center;
`;

Body.Form = styled.div`
  margin-top: 30px;
  > input {
    margin-bottom: 10px;
  }
`;
Body.TermsInfo = styled.div``;
Body.Terms = styled.p`
  color: white;
  > a {
    color: #4fe3c1;
  }
`;
Body.Action = styled.div``;

export default Body;
