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

function Body() {     

  const Tabs = styled(Tab)`
  color: White;
  display: flex;
    overflow: hidden;
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
  const [value, setValue] = React.useState('1');

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  }; 

  function contactBrokr() {
    Swal.fire({            
      html:      
      '<button href="#" style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Llamada telefónica \n</button><br>' + 
      '<button style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Llamada telefónica \n</button><br>'+   
      '<button style="color: #e5b88e;background-color: transparent; padding: 10px 20px;cursor: pointer; transition: all 0.3s ease; transition: all 0.3s ease; &:hover { background-color: #e5b88e; color: white; } &:focus { outline: none; }">Correo electrónico\n</button>',
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

  useEffect(() => {  
   
  }, []);

  return (
    <><br /><br /><br /><br /><Boxe sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Boxe sx={{ borderBottom: 5, borderColor: 'divider', color: 'white' }}>
          <Table onChange={handleChange} aria-label="lab API tabs example" color="white">
            <Tabs label="INFORMACIÓN" value="1" sx={{ ml: 25 }} />
            <Tabs label="PROPIEDADES" value="2" sx={{ ml: 25 }} />
            <Tabs label="COMENTARIOS" value="3" sx={{ ml: 25 }} />
          </Table>
        </Boxe>
        <Panel value="1"><h1>Acerca de {"Angel Armando Saldivar"}</h1>
          <h1>Forma de trabajo {"Inmobiliaria"}</h1>
          <h1>Certificaciones {"No cuento con certificaciones"}</h1>
          <h1>Especialidad {"otros"}</h1>
          <h1>Correo {"ang.arm.saldivar@gmail.com"}</h1>
        </Panel>
        <Panel value="2">

        <Grid container spacing={10}>
         
                
                <Grid item key={"res.id"} xs={12}  sm= {6} md={4} lg={4}>
                  <Body.Card className={"classes.root"}>
                    <Body.ImagePropertyContainer>                        
                      <Body.ImageProperty src={"res.archives.map((item:any) => item.location)"} size={''}/>
                    </Body.ImagePropertyContainer>

                    <Body.ImageContainer>                         
                      <Body.PriceContainer>
                        <Body.Price>${new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(1500)} {"MXN"}</Body.Price>
                      </Body.PriceContainer>
                      </Body.ImageContainer>

                    <Body.InformationContainer>
                    <Body.BrokrInfo>
                      <Body.BrokrImageContainer>                      
                        <Body.BrokrImage src={"res.user.profile.imageLocation"} size={'45px'} />
                      </Body.BrokrImageContainer>
                      <Body.BrokrNameContainer>
                        <Body.BrokrName size={"12px"}>
                          {"res.user.name"} {"res.name.lastname"}
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
                            {"res.classification.name"} en {"res.operation.name"}
                          </Body.EstateTitle>
                        <Body.EstateDescription>
                          {"res.description"}
                        </Body.EstateDescription>
                        </Body.EstateInfo>
                        <Body.LinksContainer>
                        <Body.Comission>Comisión: {5}%-({5}/{100})</Body.Comission>
                        <Body.Link to={"/property/" + "res.id"} onClick={(res)=> console.log(res)}>Ver</Body.Link>
                        {/* <button id={res.id} onClick={obtenerId}></button> */}
                        </Body.LinksContainer>
                    </Body.InformationContainer>
                  </Body.Card>

                  
                </Grid>

            </Grid>

        </Panel>
        <Panel value="3"><h1>Hola 3</h1><h1>Hola 3</h1><h1>Hola 3</h1></Panel>
      </TabContext>
    </Boxe>
     
     <Body.ButtonContainer>
        <Body.Button onClick={contactBrokr} >Contactar</Body.Button>  
      </Body.ButtonContainer>
    
    </>
    
  );
  
}

Body.ImagePropertyContainer = styled.div`  
  
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
