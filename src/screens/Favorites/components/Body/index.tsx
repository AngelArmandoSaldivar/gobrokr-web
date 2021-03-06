import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Swal from 'sweetalert2';
import Grid from '@material-ui/core/Grid';
import { RatingStar } from "rating-star";
import { Link, LinkProps } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import axios from 'axios';
 

function obtenerId(id:any, lat:any, lng:any) {
  localStorage.setItem('idProperty', id);
  localStorage.setItem('lat', lat);
  localStorage.setItem('lng', lng);
  window.location.href = '/property/' + localStorage.getItem("idProperty");
};

const url = "http://localhost:3001/gb/api/v1/";
var userID = localStorage.getItem("IdBrokr");
var token = localStorage.getItem('token');

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

function Body() {
    
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [value, setValue] = useState('1');
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  //ID BROKR
  const idBrokr = localStorage.getItem("IdBrokr");

  //Params
  var queryParamsComments = {
    params: {
      filter: {
        where: {
          ownerId: idBrokr
        },
      },
      access_token: token
    },  
  }
  var queryParams = {
    params: {
      filter: {
        where: {
          userId: userID
        },        
      },
    }
  }
  var urlComent = url + "commentsratings";
  //Comentarios de un usuario
  function commentsUser() {
    axios.get(urlComent, queryParamsComments)
    .then(res => {      
      setComments(res.data);
    })
  }
  //Perfil brokr
  function profileBrokr() {
    axios.get(url + "users/" + userID + "?access_token=" + token)
    .then(res => {
      setData(res.data);
    });
  }
  //Propiedades de un usuario
  function propertiesBrokr() {
    axios.get(url + "properties?access_token=" + token + "&", queryParams)
    .then(res => {      
      setProperties(res.data);
    })
  }
  function sendEmail() {
    window.location.href = "ang.arm.saldivar@gmail.com";
  }
  useEffect(() => {
    profileBrokr();
    propertiesBrokr();
    commentsUser();
  }, []);

  const Tabs = styled(Tab)`
  color: White;
  display: flex;
    
    min-height: 48px;
  :hover {
    color: #4fe3c1;
  }    
  `;
 
  const Table = styled(TabList)`
    padding:1px 50px
  `;

  const Panel = styled(TabPanel)`
   color:white;
   margin-left:25px;
  `;

  const Boxe = styled(Box)`
 
  `; 

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  }; 

  function contactBrokr() {
    Swal.fire({            
      html:      
      '<button href="#" style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Llamada telef??nica \n</button><br>' + 
      '<button style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Llamada telef??nica \n</button><br>'+   
      '<button style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Correo electr??nico\n</button>',
      width: 500,
      padding: '1em',
      background: '#1b1e24',
      backdrop: `
        rgba(34,37,46,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: 'rgba(34,37,46,0.4)',
    })
  }
  const Open = () => {
    setOpen(true);
  };
  const Close = async () => {    
    setOpen(false);
  };



  return (
    <><br /><br /><br /><br />
    <Boxe sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Boxe sx={{ borderBottom: 5, borderColor: 'divider', color: '#4fe3c1' }}>
          <Table onChange={handleChange} aria-label="lab API tabs example" color="white">
            <Tabs label="PROPIEDADES" value="1" sx={{ ml: 25 }} />
            <Tabs label="BROKRS" value="2" sx={{ ml: 25 }} />
            <Tabs label="B??SQUEDAS" value="3" sx={{ ml: 25 }} />
          </Table>
        </Boxe>
        {data.map((item:any) => (
        <Panel value="1">
            <Grid container spacing={3}>
            {properties.map((res:any) =>(
              <Grid item xs={4}>
                <Body.Card className={classes.root}>
                  <Body.ImagePropertyContainer>
                    <Body.ImageProperty src={res.archives.map((item:any) => item.location)} size={''}/>
                  </Body.ImagePropertyContainer>
                  <Body.ImageContainer>
                    <Body.PriceContainer>
                      <Body.Price>${new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(res.price)} {"MXN"}</Body.Price>
                    </Body.PriceContainer>
                    </Body.ImageContainer>
                  <Body.InformationContainer>
                  <Body.BrokrInfo>
                    <Body.BrokrImageContainer>                      
                      <Body.BrokrImage src={res.user.profile.imageLocation} size={'45px'} />
                    </Body.BrokrImageContainer>
                    <Body.BrokrNameContainer>
                      <Body.BrokrName size={"12px"}>
                        {res.user.name} {res.name.lastname}
                      </Body.BrokrName>
                      <Body.StarsContainer>                                    
                      < RatingStar 
                        id = "custom-icon-wow" 
                        rating = {5}
                        colors = { {  mask : "# 43a7e3"  } } 
                        noBorder 
                        maxScore = {5}
                        size = {15}
                      />                     
                      </Body.StarsContainer>
                    </Body.BrokrNameContainer>
                  </Body.BrokrInfo>                   
                      <Body.EstateInfo>
                        <Body.EstateTitle>
                          {res.classification.name} en {res.operation.name}
                        </Body.EstateTitle>
                      <Body.EstateDescription>
                        {res.description}
                      </Body.EstateDescription>
                      </Body.EstateInfo>
                      <Body.LinksContainer>
                      <Body.Comission>Comisi??n: {res.totalCommission}%-({res.percentageCommission}/{res.totalCommission})</Body.Comission>
                      <Body.Link to={"#"} onClick={()=>obtenerId(res.id, res.location.lat, res.location.lng)}>Ver</Body.Link>
                      </Body.LinksContainer>
                  </Body.InformationContainer>
                </Body.Card>
              </Grid>
          ))}  
          </Grid>  
        </Panel>
        ))}
        
        <Body.CardContainer>
          
        <Panel value="2">
        {comments.map((item:any) => (
              <>
              <Body.Comments>
                <Body.BrokrImageContainer>
                  <Body.BrokrImage src={item.user.profile.imageLocation} size={'60px'} />
                </Body.BrokrImageContainer>
                <Body.BrokrNameComment>                
                  <h5>{item.user.name}{item.user.lastname}</h5>                
                  <Rating
                  name="text-feedback"
                  value={item.rating}
                  readOnly
                  precision={1}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                </Body.BrokrNameComment>
                <Body.BrokrNameComment>
                  <h5>{"0"} Propiedades</h5>
                  <h5>{"0"} Comentarios</h5>
                </Body.BrokrNameComment>

                <Body.BrokrNameComment>
                  <Button>Eliminar</Button>
                </Body.BrokrNameComment>
            </Body.Comments>         

            <Divider variant="middle" style={{border:"1px solid #6D6D6D"}}/>
           </>
            ))}
        </Panel>
        </Body.CardContainer>

        <Panel value="3">         
        <Body.Comments>
            <Body.BrokrImageContainer>
              <Body.BrokrImage src={""} size={'60px'} />
            </Body.BrokrImageContainer>
            <Body.BrokrNameComment>                
              <h5>{"Departamentos"}{" - "} {"Renta"} {" - "} {"Unicaci??n actual"}</h5>
              <h5 style={{color:"#4fe3c1"}}>{"12.12.2021"}</h5>
            </Body.BrokrNameComment>
            <Body.BrokrNameComment>
              <Button>Eliminar</Button>
            </Body.BrokrNameComment>                
        </Body.Comments>
        <Body.Comments>
          <h5>Rango de precio: ${"5"}</h5>
        </Body.Comments>
        <Divider variant="middle" style={{border:"1px solid #6D6D6D"}}/>            
        </Panel>
      </TabContext>
    </Boxe>
    </>    
  );
  
}
Body.Calif = styled.button`
  margin-left: 20px;
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transparent;
  padding: 10px 40px;
  border-radius: 10px;  
  cursor: pointer;
  text-aling:center;
  transition: all 0.3s ease;
  &:hover { background-color: #e5b88e; color: white; }
  &:focus { outline: none; }
`;
Body.BrokrNameComment = styled.div`
  margin-left: 50px;
`;
Body.CommentsUsers = styled.div`
  width: 100%;
  padding: 0px 50px;
  margin-bottom: 50px;
  text-aling:justify-content;  
  display: flex;  
`;

Body.Comments = styled.div`
  width: 100%;
  padding: 0px 50px;
  text-aling:justify-content;
  display: flex;
  justify-content: flex-start;
`;

Body.Calif = styled.button`
  margin-left: 20px;
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transparent;
  padding: 10px 40px;
  border-radius: 10px;  
  cursor: pointer;
  text-aling:center;
  transition: all 0.3s ease;
  &:hover { background-color: #e5b88e; color: white; }
  &:focus { outline: none; }
`;

Body.CardContainer = styled.div`  
  width: 100%;
  padding: 0px 50px;
  margin-bottom: 50px;
`;
Body.Comment = styled.div`
  width: 100%;
  background-color: #151a29;
`;
Body.ButtonComment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
Body.ImagePropertyContainer = styled.div`  
  
`;
Body.FeatureInfo = styled.p`
  margin-left: 50px;
  color: white;
  font-size: 16px;
`;
Body.FeatureInfoBrokr = styled.p`
  margin-left: 50px;
  color: #4fe3c1;
  font-size: 15px;
`;
Body.FeatureTitle = styled.p`
  margin-left: 50px;
  color: #6D6D6D;
  font-size: 22px;
`;
Body.BrokrImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
`;
Body.Price = styled.span`
  color: #1d202d;
  font-size: 15px;
  font-weight: bold;  
`;
Body.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 25px;   
`;
Body.BrokrNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex: 1;
`;
Body.StarsContainer = styled.div`
  margin-top: 5px;
`;
Body.EstateTitle = styled.p`
  color: #4dd9b9;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;
// Links style
Body.LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Body.Comission = styled.span`
  font-size: 13px;
  color: #e5b88e;
`;
Body.Link = styled(Link)<{ to: string }>`
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
Body.EstateDescription = styled.p`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  margin-top: 5px;
  text-overflow: Ellipsis;
  white-space: nowrap;
  overflow:hidden;
`;
Body.PriceContainer = styled.div`
  max-height: 20px;
  padding: 4px 15px;
  background: #4fe3c1;
  box-shadow: inset 0px 4px 4px rgba(120, 117, 117, 0.25);
  border-radius: 30px;
`;
// State info styles
Body.EstateInfo = styled.div`
  margin-top: 10px;
`;
//brokr info styles
Body.BrokrInfo = styled.div`
  display: flex;
  align-items: center;
`;
Body.BrokrName = styled.span<{ size: number | string }>`
  color: white;
  font-size: ${({ size }) => size};
`;
// image styles
Body.ImageContainer = styled.div`
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
Body.ImageProperty = styled.img<{ size: number | string }>`
  width: 100%;
  height: 200px;  
  border-top-left-radius: 30px 30px;
  border-top-right-radius: 30px 30px;
`;
Body.Card = styled.div`
  width: 275px;
  background: #1d202d;
  transition: box-shadow 0.3s ease;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-top: 50px;
  align-items: center;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.7);
  }
`;
Body.ButtonContainer = styled.div `
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 50px
`;
Body.Button = styled.button`
  color: #e5b88e;
  border: 1px solid #e5b88e;
  background-color: transparent;
  padding: 10px 40px;
  border-radius: 10px;  
  cursor: pointer;
  text-aling:center;
  transition: all 0.3s ease;
  &:hover { background-color: #e5b88e; color: white; }
  &:focus { outline: none; }
`;
// information styles
Body.InformationContainer = styled.div`
  padding: 10px 20px;
  background-color: #1d202d;
  border-radius: 30px;
`;
Body.Container = styled.div`
  background-color: #1d202d;
  display: flex;
  margin: 62px 0px 0px 70px
`;
export default Body;
