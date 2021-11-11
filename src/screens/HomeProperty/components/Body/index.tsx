import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BedIcon from '../../../../assets/icons/bed-icon.svg';
import BathIcon from '../../../../assets/icons/bath-icon.svg';
import MetersIcon from '../../../../assets/icons/meters-icon.svg';
import ParkinIcon from '../../../../assets/icons/parking-icon.svg';
import axios from '../../../../api/index';
import Swal from 'sweetalert2';
import { RatingStar } from "rating-star";
import { Link} from 'react-router-dom';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

import {
  EstateCard,
  TextInput,
  ButtonComponent as Button
} from '../../../../components';

import { UserInfo } from '../../../../components/EstateCard/components';
import { useWindowScroll } from 'react-use';

const token = localStorage.getItem('token');
const id = localStorage.getItem('idProperty');
const url = "http://localhost:3001/gb/api/v1/properties/" + id + "/" +"?access_token="+ token;

function Map() {

  var coodinates = {
      lat: Number(localStorage.getItem('lat')),
      lng: Number(localStorage.getItem('lng'))
  }

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coodinates}
    >
      <Marker
        position={coodinates}
      />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Body() {

  const { y } = useWindowScroll();
  const [price, setPrice] = useState('');
  const [totalCommission, setTotalCommission] = useState('');
  const [percentageCommission, setPercentageCommission] = useState('');  
  const [classificationName, setClassificationName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [constructionZone, setConstructionZone] = useState('');
  const [parkingPlaces, setParkingPlaces] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState(''); 
  const [updatedAt, setUpdatedAt] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [propertyId, setPropertyId] = useState('');
  //Brokr
  const [imageBrokr, setImageBrokr] = useState('');
  const [brokrName, setBrokrName] = useState('');
  const [ratingBrokr, setRatingBrokr] = useState('');
  const [countproperties, setCountproperties] = useState('');
  const [ncomments, setNcomments] = useState('');
  const [idBrokr, setIdBrokr] = useState('');

  //Get property user
  function getProperty() {    
    axios.get(url).then((res:any) => {
      setPrice(res.data.price);
      setTotalCommission(res.data.totalCommission);
      setPercentageCommission(res.data.percentageCommission);    
      setClassificationName(res.data.name);
      setRoomNumber(res.data.roomNumber);
      setBathrooms(res.data.bathrooms);
      setConstructionZone(res.data.constructionZone);
      setParkingPlaces(res.data.parkingPlaces);
      setAmenities(res.data.amenities);
      setDescription(res.data.description);   
      setCreatedAt(res.data.createdAt);
      setUpdatedAt(res.data.updatedAt);
      setPropertyId(res.data.id);
      setImageBrokr(res.data.user.profile.imageLocation);
      setBrokrName(res.data.user.name);
      setRatingBrokr(res.data.user.rating);
      setCountproperties(res.data.user.countproperties);
      setNcomments(res.data.user.ncomments);
      
    })
    .catch(err => console.log(err)); 
  }
  //Add property by Favorites
  function addFav() {
    const data = {createdAt, updatedAt, id, propertyId}    
    const url = "http://localhost:3001/gb/api/v1/favorites/" +"?access_token="+ token;
    axios.post(url, data).then((res:any) => {
      Swal.fire({            
        html:
        '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
        '<p style="color:white;">Propiedad agregada a favoritos \n</p>',        
        width: 500,
        padding: '1em',
        background: '#1b1e24',
        backdrop: `
          rgba(34,37,46,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'rgba(34,37,46,0.4)',
      })
      console.log('Propiedad agregada a favoritos ', res);
    })
    .catch(err => {
      Swal.fire({             
        html:
        '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
        '<p style="color:white;">No se pudo agregar la propiedad a favoritos! \n</p>',        
        width: 500,
        padding: '1em',
        background: '#1b1e24',
        backdrop: `
          rgba(34,37,46,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'rgba(34,37,46,0.4)',
      })
    })    
  }  
  //Id brokr
  function IdBrokr() {
    // localStorage.setItem('IdBrokr', idBrokr);
    console.log('ID BROKR: ', idBrokr);
    window.location.href = '/brokr';
  }
  useEffect(() => {  
    getProperty();    
  }, []);

  return (
    <Body.Container>
      <Body.Info>
        <Body.TitleContainer>
        <Body.ContainerPrice>     
          <Body.Features>
            <Body.Feature>
              <Body.Price>
                <Body.PriceText>${new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(Number(price))} {"MXN"}</Body.PriceText>
              </Body.Price>
            </Body.Feature>
            <Body.Feature>
            <Body.Action>
            <Button onClick={addFav}>Añadir a favoritos</Button>
          </Body.Action>
            </Body.Feature>  
          </Body.Features>
        </Body.ContainerPrice>
        <br /><br />
          <Body.Subtitle>Comisión {totalCommission}% - {percentageCommission}/{totalCommission} </Body.Subtitle>
          <Body.Title>{classificationName}</Body.Title>
        </Body.TitleContainer>
        <Body.FeaturesContainer>
          <Body.Subtitle> BROKR</Body.Subtitle>
          <Body.Features>
          <Body.Feature>
            <Body.BrokrImageContainer>                      
              <Body.BrokrImage src={imageBrokr} size={'60px'} />
            </Body.BrokrImageContainer>
            </Body.Feature>
            <Body.Feature>              
              <Body.FeatureInfo>{brokrName}</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>              
              <Body.FeatureInfo>

              <Body.StarsContainer>                                    
                < RatingStar 
                  id = "custom-icon-wow" 
                  rating = {Number(ratingBrokr)}
                  colors = { {  mask : "# 43a7e3"  } } 
                  noBorder 
                  maxScore = {5}
                  size = {15}

                />                     
              </Body.StarsContainer>

              </Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>              
              <Body.FeatureInfo>{countproperties} Propiedades</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>              
              <Body.FeatureInfo>{ncomments} Comentarios</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>              
              <Body.FeatureInfo><Body.Action>
            {/* <Button.Link onClick={()=>IdBrokr()}>Ver Brokr</Button.Link> */}
            <Body.Link to={""} onClick={()=>IdBrokr()}>Ver</Body.Link>
          </Body.Action></Body.FeatureInfo>
            </Body.Feature>
          </Body.Features>
        </Body.FeaturesContainer>
        <Body.FeaturesContainer>
          <Body.Subtitle>Caracteristicas</Body.Subtitle>
          <Body.Features>
            <Body.Feature>
              <Body.FeatureIcon src={BedIcon} />
              <Body.FeatureInfo>{roomNumber} Habitaciones</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={BathIcon} />
              <Body.FeatureInfo>{bathrooms} Baños</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={MetersIcon} />
              <Body.FeatureInfo>{constructionZone} Sup.</Body.FeatureInfo>
            </Body.Feature>
            <Body.Feature>
              <Body.FeatureIcon src={ParkinIcon} />
              <Body.FeatureInfo>{parkingPlaces} Estacionamientos</Body.FeatureInfo>
            </Body.Feature>
          </Body.Features>
        </Body.FeaturesContainer>
        <Body.SpecialFeaturesContainer>
          <Body.Subtitle>Caracteristicas especiales</Body.Subtitle>
          <Body.SpecialFeaturesList>
            {amenities.map((item:any) => (
            <Body.SpecialFeaturesItem>{item.name}</Body.SpecialFeaturesItem>      
            ))}      
          </Body.SpecialFeaturesList>
        </Body.SpecialFeaturesContainer>


        <Body.UbicationContainer>
        <Body.Subtitle>Ubicación</Body.Subtitle><br/><br/>
        <Body.DetailInformation>
            {description}
          </Body.DetailInformation><br/><br/>
          <div style={{width:"70vw", height:"70vh"}}>
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
              libraries=geometry,drawing,places&key=AIzaSyC36bGPspEJEk79AVJmUNWXcjMB7AlYtdg`}
              loadingElement={<div style={{height:"100%"}}></div>}
              containerElement={<div style={{height:"100%"}}></div>}
              mapElement={<div style={{height:"100%"}}></div>}
            />
          </div>
        </Body.UbicationContainer>


        <Body.DetailsContiner>
          <Body.Subtitle>Más detalles</Body.Subtitle>
          <Body.DetailInformation>
            {description}
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


Body.Link = styled(Link)<{ to: string }>`
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e5b88e;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

Body.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 25px;   
`;

Body.BrokrImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
`;

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
Body.ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;  
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

Body.PriceContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: left;
  justify-content: left;
  margin-left:480px
`;
Body.Price = styled.div`
  padding: 10px 40px;
  align-items: center;
  justify-content: center;
  background: #4fe3c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
Body.PriceText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;

Body.StarsContainer = styled.div`
  margin-top: 5px;
`;
export default Body;
