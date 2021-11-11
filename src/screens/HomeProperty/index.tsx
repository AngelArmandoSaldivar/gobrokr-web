import React, { useEffect } from 'react';
import { LayoutProperties } from '../../components';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../api/index';
import { RatingStar } from "rating-star";
import { Link } from 'react-router-dom';
import imageFond from '../../assets/images/background-third.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    boxShadow: '0.05px 0.05px #1d202d' 
  },
}));

function obtenerId(id:any, lat:any, lng:any) {
  localStorage.setItem('idProperty', id);
  localStorage.setItem('lat', lat);
  localStorage.setItem('lng', lng);
  window.location.href = '/property/' + localStorage.getItem("idProperty");
};

function HomeProperty() {    

  const classes = useStyles();

  const [properties, setProperties] = useState([]);

    const token = localStorage.getItem('token');    

    const url = "http://localhost:3001/gb/api/v1/properties" + "?access_token=" + token + "&"; 
    const classificationId = localStorage.getItem("idClassification");
    const tipos = localStorage.getItem("tipos");
    const tipo = localStorage.getItem("tipo");
    
    function funLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        
        let queryParams = { params: { filter: { where: { classificationId: classificationId, location: { maxDistance: 500, near: { lat: position.coords.latitude, lng: position.coords.longitude }, unit: "meters" } } } } }
        axios.get(url, queryParams).then( res => {
          setProperties(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      });                    
    }

    useEffect(() => {
 
      funLocation();
     
    }, []);  

  return (
    <LayoutProperties>   

      <HomeProperty.Title>
        <HomeProperty.Tipo>{tipo}</HomeProperty.Tipo>
        <HomeProperty.Tipos>{tipos}</HomeProperty.Tipos>
        <HomeProperty.Sub>{"Es momento de cerrar negocios"}</HomeProperty.Sub>
      </HomeProperty.Title>

      <HomeProperty.Container>
      <Grid container spacing={10}>
              {properties.map((res:any) => (                
                <Grid item key={res.id} xs={12}  sm= {6} md={4} lg={4}>                  
                  <HomeProperty.Card className={classes.root}>
                  <HomeProperty.ImagePropertyContainer>
                    <HomeProperty.ImageProperty src={res.archives.map((item:any) => item.location)} size={''}/>
                  </HomeProperty.ImagePropertyContainer>
                   <HomeProperty.ImageContainer>                         
                    <HomeProperty.PriceContainer>
                      <HomeProperty.Price>${new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(res.price)} {"MXN"}</HomeProperty.Price>
                    </HomeProperty.PriceContainer>
                    </HomeProperty.ImageContainer>

                  <HomeProperty.InformationContainer>
                  <HomeProperty.BrokrInfo>
                    <HomeProperty.BrokrImageContainer>                      
                      <HomeProperty.BrokrImage src={res.user.profile.imageLocation} size={'45px'} />
                    </HomeProperty.BrokrImageContainer>
                    <HomeProperty.BrokrNameContainer>
                      <HomeProperty.BrokrName size={"12px"}>
                        {res.user.name} {res.name.lastname}
                      </HomeProperty.BrokrName>
                      <HomeProperty.StarsContainer>                                    
                      < RatingStar 
                        id = "custom-icon-wow" 
                        rating = {res.user.rating}
                        colors = { {  mask : "# 43a7e3"  } } 
                        noBorder 
                        maxScore = {5}
                        size = {15}

                      />                     
                      </HomeProperty.StarsContainer>
                    </HomeProperty.BrokrNameContainer>
                  </HomeProperty.BrokrInfo>                   
                      <HomeProperty.EstateInfo>
                        <HomeProperty.EstateTitle>
                          {res.classification.name} en {res.operation.name}
                        </HomeProperty.EstateTitle>
                      <HomeProperty.EstateDescription>
                        {res.description}
                      </HomeProperty.EstateDescription>
                      </HomeProperty.EstateInfo>
                      <HomeProperty.LinksContainer>
                      <HomeProperty.Comission>Comisión: {res.totalCommission}%-({res.percentageCommission}/{res.totalCommission})</HomeProperty.Comission>
                      <HomeProperty.Link to={"#"} onClick={()=>obtenerId(res.id, res.location.lat, res.location.lng)}>Ver</HomeProperty.Link>
                      {/* <button id={res.id} onClick={obtenerId}></button> */}
                      </HomeProperty.LinksContainer>
                  </HomeProperty.InformationContainer>
              </HomeProperty.Card>
                </Grid>
              ))}
      </Grid>
      </HomeProperty.Container>
    </LayoutProperties>
  );
}
HomeProperty.Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 115px;
  background-color: #1d202d;  
  background-repeat: repeat;
  background-size: auto 30%;
`;
HomeProperty.Title = styled.div`
  width: 100%;
  background: #1d202d;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);  
  background-image: url(${imageFond});
  align-items: center;  
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  }
`;

HomeProperty.Link = styled(Link)<{ to: string }>`
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transpaHome;
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
HomeProperty.Tipo = styled.p`
  color: #e5b88e;
  font-size: 25px;
  font-weight: bold;
  margin-top: 25px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 550px;
`;
HomeProperty.Tipos = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 550px;
`;
HomeProperty.Sub = styled.div`
  color: white;
  font-size: 14px;
  font-weight: "Roboto",sans-serif;
  margin-top: 25px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 550px;
  margin-bottom: 100px
`;

HomeProperty.Comission = styled.span`
  font-size: 13px;
  color: #e5b88e;
`;

HomeProperty.LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// State info styles
HomeProperty.EstateInfo = styled.div`
  margin-top: 10px;
`;
HomeProperty.EstateTitle = styled.p`
  color: #4dd9b9;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;
HomeProperty.EstateDescription = styled.p`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  margin-top: 5px;
  text-overflow: Ellipsis;
  white-space: nowrap;
  overflow:hidden;
`;

HomeProperty.StarsContainer = styled.div`
  margin-top: 5px;
`;
HomeProperty.Star = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

//brokr info styles
HomeProperty.BrokrInfo = styled.div`
  display: flex;
  align-items: center;
`;
HomeProperty.BrokrImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
`;
HomeProperty.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 25px;   
`;
HomeProperty.BrokrNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex: 1;
`;
HomeProperty.BrokrName = styled.span<{ size: number | string }>`
  color: white;
  font-size: ${({ size }) => size};
`;

HomeProperty.InformationContainer = styled.div`
  padding: 10px 20px;
  background-color: #1d202d;
  border-radius: 30px;
`;


HomeProperty.Price = styled.span`
  color: #1d202d;
  font-size: 15px;
  font-weight: bold;  
`;

HomeProperty.PriceContainer = styled.div`
  max-height: 20px;
  padding: 4px 15px;
  background: #4fe3c1;
  box-shadow: inset 0px 4px 4px rgba(120, 117, 117, 0.25);
  border-radius: 30px;
`;

HomeProperty.ImageContainer = styled.div`
  height: 18px;    
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 30px 30px 0px 0px;
  padding: 12px;
`;

HomeProperty.ImagePropertyContainer = styled.div`  
  
`;

HomeProperty.ImageProperty = styled.img<{ size: number | string }>`
  width: 100%;
  height: 150px;  
  border-top-left-radius: 30px 30px;
  border-top-right-radius: 30px 30px;
`;

HomeProperty.Card = styled.div`
  width: 310px;
  background: #1d202d;
  transition: box-shadow 0.3s ease;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  margin-bottom: 50px;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  }
`;

export default HomeProperty;
