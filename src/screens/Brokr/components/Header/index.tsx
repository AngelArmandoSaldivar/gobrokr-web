import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../api/index';
import { RatingStar } from "rating-star";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Rating from '@mui/material/Rating';
import { TextInput } from '../../../../components';
import Box from '@mui/material/Box';

import Swal from 'sweetalert2';

const url = "http://localhost:3001/gb/api/v1/";
var userID = localStorage.getItem("IdBrokr");
var token = localStorage.getItem('token');

function Header(props:any) {

  const [data, setData] = useState([]);
  const [imageProfile, setImageProfile] = useState('');
  const [rating, setRating] = useState(1);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  const Open = () => {
    setOpen(true);
  };

  //Generador de ID con crypto
  // var crypto = require("crypto");
  // var id = "5cac" + crypto.randomBytes(10).toString('hex');

  //ID BROKR
  const idBrokr = localStorage.getItem("IdBrokr");
  //Insercción de comentarios.
  const handleCommentRating = async () => {
    var params = {
      comment: comment,
      ownerId: idBrokr,
      rating: rating,
      userId: userID
    }    
    const res = await axios.post(url + "commentsratings?access_token=" + token, params);
    if(res.data) {
      Swal.fire({
        html:
        '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
        '<p style="color:white;">Comentario insertado\n</p>',
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
      window.location.href = '/brokr/';
    } else {
      console.log('No se inserto el comentario.');
    }
    setOpen(false);
  };
  const Close = async () => {    
    setOpen(false);
  };
  //Perfil brokr
  function profileBrokr() {
    axios.get(url + "users/" + userID + "/profile/" + "?access_token=" + token)
    .then(res => {
      console.log("Profile user: ", res.data.imageLocation);
      setImageProfile(res.data.imageLocation);
    });
    axios.get(url + "users/" + userID + "?access_token=" + token)
    .then(res => {
      console.log("Data: ", res.data);
      setData(res.data)
    })
  }

  useEffect(() => {
    profileBrokr();
  }, []);  

  return (
    <>
    {data.map((res:any) => (
    <><Header.Container>
        <Header.Info>
          <Header.FeaturesContainer>
            <Header.Subtitle> BROKR: </Header.Subtitle> <br /><br />
            <Header.Features>
              <Header.Feature>
                <Header.BrokrImageContainer>
                  <Header.BrokrImage src={imageProfile} size={'60px'} />
                </Header.BrokrImageContainer>
              </Header.Feature>
              <Header.Feature>
                <Header.FeatureInfo>{res.CustomUser.name} {res.CustomUser.lastname}</Header.FeatureInfo>
              </Header.Feature>
              <Header.Feature>
                <Header.FeatureInfo>

                  <Header.StarsContainer>
                    <RatingStar
                      id="custom-icon-wow"
                      rating={Number(res.CustomUser.rating)}
                      colors={{ mask: "# 43a7e3" }}
                      noBorder
                      maxScore={5}
                      size={15} />
                  </Header.StarsContainer>                 
                </Header.FeatureInfo>
              </Header.Feature>
              <Header.Feature>
                <Header.FeatureInfo>{0} Propiedades</Header.FeatureInfo>
              </Header.Feature>
              <Header.Feature>
                <Header.FeatureInfo>{res.CustomUser.ncomments} Comentarios</Header.FeatureInfo>
              </Header.Feature>
            </Header.Features>
          </Header.FeaturesContainer>
        </Header.Info>
        <br />       
    </Header.Container>    
        
    <Header.ContainerButtom>
      <Header.Info>
      <Header.FeaturesContainer>
      <Header.Features>
        <Header.Feature>
          <Header.Calif onClick={Open}>Calificar</Header.Calif>       
        </Header.Feature>    
        <Header.Feature> 
          <Header.Calif onClick={() => console.log("Hola")}>Seguir</Header.Calif>
        </Header.Feature> 
        <Header.Feature> 
          <Header.Calif onClick={() => console.log("Hola")}>Reportar</Header.Calif>
        </Header.Feature> 

        <Dialog open={open} onClose={Close} maxWidth={'sm'}>
              <DialogContent style={{background:"rgba(34,37,46,0.9)", alignItems:"center"}}>
                  {data.map((item:any) => (
                  <DialogContentText style={{color:"white", alignItems:"center", marginBottom:"25px", fontSize:"18px", textAlign:"center"}}>
                    Califica y compartenos tu experiencia al trabajar con {item.CustomUser.name} {item.CustomUser.lastname}
                  </DialogContentText>
                  ))}
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      style={{color:"#e5b88e", alignItems:"center", marginBottom:"25px", fontSize:"35px", marginLeft:"35%"}}
                      onChange={(item: any, newItem: any) => {
                        setRating(newItem);
                      } } />

                       <TextInput
                        onChange={(e) => setComment(e)}
                        value={comment}
                        placeholder="Comentario"
                      />
                  </Box>
                </DialogContent>
                <DialogActions style={{background:"rgba(34,37,46,0.9)"}}>
                  <Button onClick={handleCommentRating} style={{color:"white"}}>ACEPTAR</Button>
                  <Button onClick={Close} style={{color:"white"}}>CANCELAR</Button>
                </DialogActions>
        </Dialog>
        </Header.Features>
        </Header.FeaturesContainer>
      </Header.Info>
      </Header.ContainerButtom></>
    ))}
  </>
  );
}

Header.Calif = styled.button`
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

Header.Info = styled.div`
  width: 90%;  
  item-aling:center
`;

Header.Action = styled.div``;

Header.StarsContainer = styled.div`
  margin-top: 5px;
`;

Header.FeatureInfo = styled.p`
  margin-left: 15px;
  color: white;
  font-size: 16px;
`;

Header.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 25px;   
`;

Header.BrokrImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
`;

Header.Feature = styled.div`
  display: flex;
  align-items: center;  
`;

Header.Features = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

Header.Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #4fe3c1;
`;

Header.FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 70px
`;

Header.img = styled.img<{ size: number | string }>`
  width: 100%;
  height: 470px;
`;
Header.ImagePropertyContainer = styled.div`
  
`;

Header.Container = styled.div`
  background-color: #1d202d;
  display: flex;
`;
Header.ContainerButtom = styled.div`
  background-color: #1d202d;
  display: flex;
`;
// Actions
Header.Actions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
`;
Header.PriceContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
Header.Price = styled.div`
  padding: 10px 40px;
  align-items: center;
  justify-content: center;
  background: #4fe3c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
Header.PriceText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;
Header.GalleryContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
Header.GalleryButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 15px 40px;
  background: #4fe3c1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

//Images
Header.ImgCol = styled.div`
  width: 50%;
  height: 100%;
`;
Header.MainImg = styled.img`
  width: 100%;
  height: 100%;
`;
Header.AltImg = styled.img`
  width: 100%;
  height: 50%;
  flex: 1;
  display: flex;
`;

export default Header;
