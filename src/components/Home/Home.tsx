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

var data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IeYBN05o8IgBtr0rdj4MgMeo6HW3g1FmKA&usqp=CAU"]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home(props: EstateCardProps) {

  const classes = useStyles();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
        
    if(localStorage.getItem('token') === null){
        window.location.href = '/';
    }

    const [properties, setProperties] = useState([]);
    const [imageProfile,setImageProfile] = useState('');
    const [location, setLocation] = useState({
      loaded: true,
      coordinates:{lat:"", lng:""},
    });

    const geoLocation = useGeolocation();

    const token = localStorage.getItem('token');

    const onSuccess = (location:any) => {
      setLocation({
        loaded:true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
      })
    }

    function onError(err:any) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    const color = {
      orange: "#FFBA5A",
      grey: "#a9a9a9"
    }
    const style = {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }

    }

    const starts = Array(5).fill(0);

    useEffect(() => {

      if(!("geolocation" in navigator)) {
        setLocation( state => ({
          ...state,
          loaded: true,
          error: {
            code: 0,
            message: "Geolocation no supported",
          }
        }));
      }      

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);      
      
      if(Number(location.coordinates.lat) && Number(location.coordinates.lat) > 0) {
        const url = "http://localhost:3001/gb/api/v1/popularproperties/home/" + Number(location.coordinates.lat) + '/' + Number(location.coordinates.lng)  + "/" +"?access_token="+ token;
        axios.get(url).then( res => {
          setProperties(res.data.properties);       
          console.log(res); 
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        const url = "http://localhost:3001/gb/api/v1/popularproperties/home/" + Number(location.coordinates.lat) + '/' + Number(location.coordinates.lng)  + "/" +"?access_token="+ token;
        axios.get(url).then( res => { 
          setProperties(res.data.properties);    
          console.log(res);                  
        })
        .catch(err => {
          console.log(err);
        })
      }

      properties.map((item:any) => {
        console.log("Rating user: ", item.user.rating + "\n");
      })
      
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

            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>Departamento</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}><Home.Link to="/property/12">Casa</Home.Link></Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Oficina</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Edificio</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Bodega</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>Terreno</Paper>
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
                        rating = {res.bathrooms}
                        colors = { {  mask : "# 43a7e3"  } } 
                        noBorder 
                        maxScore = {5}
                        onRatingChange = {(e) => 2}
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
                      <Home.Link to="/property/12">Ver</Home.Link>
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