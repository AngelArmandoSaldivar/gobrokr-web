import React, {Component, useEffect, useState} from 'react';
import axios from '../../api/index';
import { EstateCardProps } from '../EstateCard/types';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { Formik, FormikProps, FormikValues } from 'formik';
import { initialValues } from '../../screens/Rent/formik';
import { Layout } from '../../components';
import { useGeolocation } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { RatingStar } from "rating-star";
import exampleImage from '../../assets/images/example-estate.png';
import exampleImage2 from '../../assets/images/hero-background.png';
import imageFond from '../../assets/images/background-third.png';


  function obtenerId(id:any) {   
      localStorage.setItem('idProperty', id);                   
  };

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

function Home(props:EstateCardProps) {

  const classes = useStyles();

    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 3600
    };
        
    if(localStorage.getItem('token') === null){
        window.location.href = '/';
    }

    const [properties, setProperties] = useState([]);

    const token = localStorage.getItem('token');    

    const url = "http://localhost:3001/gb/api/v1/popularproperties/home/";

    function funLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {        
        axios.get(url + position.coords.latitude + "/" + position.coords.longitude + "?access_token=" + token).then( res => {
          setProperties(res.data.properties);
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
        <>
        <Layout>
          <Home.Container>
          <Formik
            initialValues={initialValues}
            onSubmit={(e: FormikValues) => console.log(e)}
          >         
          </Formik>
          <Home.CardContainer>

            <Grid container spacing={2}>
              <Grid item xs>
                <Paper className={classes.paper}><Home.LinkFilter to="/property/12">Departamento</Home.LinkFilter></Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}><Home.LinkFilter2 to="/property/12">Casa</Home.LinkFilter2></Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}><Home.LinkFilter to="/property/12">Oficina</Home.LinkFilter></Paper>
              </Grid>
              <Grid item xs>
              <Paper className={classes.paper}><Home.LinkFilter to="/property/12">Edificio</Home.LinkFilter></Paper>
              </Grid>
              <Grid item xs>
              <Paper className={classes.paper}><Home.LinkFilter to="/property/12">Bodega</Home.LinkFilter></Paper>
              </Grid>
              <Grid item xs>
              <Paper className={classes.paper}><Home.LinkFilter to="/property/12">Terreno</Home.LinkFilter></Paper>
              </Grid>
            </Grid>
          
            <Home.TitleContainer>
              <Home.Title>Encuentra, {"Angel Saldivar"}</Home.Title>              
              </Home.TitleContainer>
             <Home.TitleContainer>
              <Home.Title>Novedades</Home.Title>
            </Home.TitleContainer>            

            <Grid container>
              {properties.map((res:any) => (
                
                <Grid item key={res.id} xs={12} lg={4}>                  
                  <Home.Card className={classes.root}>
                  <Home.ImagePropertyContainer>                        
                    <Home.ImageProperty src={res.archives.map((item:any) => item.location)} size={''}/>
                  </Home.ImagePropertyContainer>

                   <Home.ImageContainer>                         
                    <Home.PriceContainer>
                      <Home.Price>${new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(res.price)} {"MXN"}</Home.Price>
                    </Home.PriceContainer>
                    </Home.ImageContainer>

                  <Home.InformationContainer>
                  <Home.BrokrInfo>
                    <Home.BrokrImageContainer>                      
                      <Home.BrokrImage src={res.user.profile.imageLocation} size={'45px'} />
                    </Home.BrokrImageContainer>
                    <Home.BrokrNameContainer>
                      <Home.BrokrName size={"12px"}>
                        {res.user.name} {res.name.lastname}
                      </Home.BrokrName>
                      <Home.StarsContainer>                                    
                      < RatingStar 
                        id = "custom-icon-wow" 
                        rating = {res.user.rating}
                        colors = { {  mask : "# 43a7e3"  } } 
                        noBorder 
                        maxScore = {5}
                        size = {15}

                      />                     
                      </Home.StarsContainer>
                    </Home.BrokrNameContainer>
                  </Home.BrokrInfo>                   
                      <Home.EstateInfo>
                        <Home.EstateTitle>
                          {res.classification.name} en {res.operation.name}
                        </Home.EstateTitle>
                      <Home.EstateDescription>
                        {res.description}
                      </Home.EstateDescription>
                      </Home.EstateInfo>
                      <Home.LinksContainer>
                      <Home.Comission>Comisión: {res.totalCommission}%-({res.percentageCommission}/{res.totalCommission})</Home.Comission>
                      <Home.Link to={"/property/" + res.id} onClick={()=>obtenerId(res.id)}>Ver</Home.Link>
                      {/* <button id={res.id} onClick={obtenerId}></button> */}
                      </Home.LinksContainer>
                  </Home.InformationContainer>
              </Home.Card>
                </Grid>
              ))}
            </Grid>
          </Home.CardContainer>
          </Home.Container>
        </Layout>
        </>
    );
}

Home.ImageProperty = styled.img<{ size: number | string }>`
  width: 100%;
  height: 200px;  
  border-top-left-radius: 30px 30px;
  border-top-right-radius: 30px 30px;
`;
Home.ImagePropertyContainer = styled.div`  
  
`;

//filter styles
Home.FilterContainer = styled.div`
  width: 20%;
`;
Home.Filters = styled.div`
 
`;
Home.Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
Home.CleanFilters = styled.button<{ onClick: any }>`
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
Home.Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  background-color: #1d202d;
  background-image: url(${imageFond});
  background-repeat: repeat;
  background-size: auto 30%;
  margin-bottom: -20px;
`;
Home.CardContainer = styled.div`
  width: 100%;
  padding: 0px 100px;
  margin-bottom: 50px;
`;
Home.Save = styled.button`
  padding: 15px 50px;
  background: transpaHome;
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
Home.TitleFilter = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #4fe3c1;
  text-align: center;
`;
Home.Title = styled.h2`
  font-size: 30px;
  color: #e5b88e;
  font-weight: bold;
  margin-right: 30px;
`;
Home.TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
`;
Home.Card = styled.div`
  width: 275px;
  background: #1d202d;
  transition: box-shadow 0.3s ease;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-top: 50px;
  align-items: center;
`;
// image styles
Home.ImageContainer = styled.div`
  height: 25px;    
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 30px 30px 0px 0px;
  padding: 12px;
`;

Home.PriceContainer = styled.div`
  max-height: 20px;
  padding: 4px 15px;
  background: #4fe3c1;
  box-shadow: inset 0px 4px 4px rgba(120, 117, 117, 0.25);
  border-radius: 30px;
`;
Home.Price = styled.span`
  color: #1d202d;
  font-size: 15px;
  font-weight: bold;  
`;

// information styles
Home.InformationContainer = styled.div`
  padding: 10px 20px;
  background-color: #1d202d;
  border-radius: 30px;
`;

// State info styles
Home.EstateInfo = styled.div`
  margin-top: 10px;
`;
Home.EstateTitle = styled.p`
  color: #4dd9b9;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;
Home.EstateDescription = styled.p`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  margin-top: 5px;
  text-overflow: Ellipsis;
  white-space: nowrap;
  overflow:hidden;
`;

// Links style
Home.LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Home.Comission = styled.span`
  font-size: 13px;
  color: #e5b88e;
`;
Home.Link = styled(Link)<{ to: string }>`
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

Home.LinkFilter = styled(Link)<{ to: string }>`
  color: #e5b88e;  
  background-image: url(${exampleImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 30px;
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

Home.LinkFilter2 = styled(Link)<{ to: string }>`
  color: #e5b88e;  
  background-image: url(${exampleImage2});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 30px;
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
//brokr info styles
Home.BrokrInfo = styled.div`
  display: flex;
  align-items: center;
`;
Home.BrokrImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
`;
Home.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 25px;   
`;
Home.BrokrNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex: 1;
`;
Home.BrokrName = styled.span<{ size: number | string }>`
  color: white;
  font-size: ${({ size }) => size};
`;
Home.StarsContainer = styled.div`
  margin-top: 5px;
`;
Home.Star = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
export default Home;