import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import { TextInput } from '../../../../components';
import Swal from 'sweetalert2';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';

function Header(props:any) {

  const [numberLike, setNumberLike] = useState(1);  
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  var data = [
    {
      name:"Angel Armando",
      lastname: "Saldivar",
      rating: 3,
      work: "Inmobiliaria",
      comment: "Esta propieda cuenta con planta baja, cochera 2 autos, bodega bajo escaleras, sala, comedor doble altura, cocina equipada, patio de servicio y cuarto de servicio con baño, primer piso: recamara con bañó y terraza, sala de tv y cuarto de blancos. Segundo piso: recamara con vestido, baño y terraza, riog garden con asador y medio baño.",
      likes: 25,      
    },
    {
      name:"Juan Pablo",
      lastname: "Martinez",
      rating: 3,
      work: "Inmobiliaria",
      comment: "Esta propieda cuenta con planta baja, cochera 2 autos, bodega bajo escaleras, sala, comedor doble altura, cocina equipada, patio de servicio y cuarto de servicio con baño, primer piso: recamara con bañó y terraza, sala de tv y cuarto de blancos. Segundo piso: recamara con vestido, baño y terraza, riog garden con asador y medio baño.",
      likes: 2,      
    },
    {
      name:"Ana Laura",
      lastname: "Sanchez",
      rating: 5,
      work: "Inmobiliaria",
      comment: "Esta propieda cuenta con planta baja, cochera 2 autos, bodega bajo escaleras, sala, comedor doble altura, cocina equipada, patio de servicio y cuarto de servicio con baño, primer piso: recamara con bañó y terraza, sala de tv y cuarto de blancos. Segundo piso: recamara con vestido, baño y terraza, riog garden con asador y medio baño.",
      likes: 12,      
    },
    {
      name:"Pablo",
      lastname: "Gonzalez Rocha",
      rating: 4,
      work: "Inmobiliaria",
      comment: "Esta propieda cuenta con planta baja, cochera 2 autos, bodega bajo escaleras, sala, comedor doble altura, cocina equipada, patio de servicio y cuarto de servicio con baño, primer piso: recamara con bañó y terraza, sala de tv y cuarto de blancos. Segundo piso: recamara con vestido, baño y terraza, riog garden con asador y medio baño.",
      likes: 5,      
    }
  ]
  const Open = () => {
    setOpen(true);
  };
  const Close = async () => {    
    setOpen(false);
  };

  const handleCommentRating = async () => {
    // var params = {
    //   comment: comment,
    //   ownerId: idBrokr,
    //   rating: rating,
    //   userId: userID
    // }    
    // const res = await axios.post(url + "commentsratings?access_token=" + token, params);
    // if(res.data) {
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
    // } else {
    //   console.log('No se inserto el comentario.');
    // }
    setOpen(false);
  };

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <> 
    <Stack direction="row" spacing={20} style={{color:"#4edebd", marginTop:"25px"}}>
    <Header.ContainerTitle>
      <Header.Subtitle> GoBrokr </Header.Subtitle> 
      <Header.Title><h3>Comunidad</h3></Header.Title> <br /><br /><br />
    </Header.ContainerTitle>
    <Header.Feature>      
    <Header.Calif onClick={() => console.log(("Brokrs"))}>Brokrs</Header.Calif>
      </Header.Feature>    
    <Header.Feature> 
      <Header.Calif onClick={() => console.log("Chats")}>Chats</Header.Calif>
    </Header.Feature> 
    <Header.Feature> 
      <Header.Calif onClick={Open}>Comment</Header.Calif>
    </Header.Feature>
    </Stack> 

    <Dialog open={open} onClose={Close} maxWidth={'xl'}>
      <DialogContent style={{background:"rgba(34,37,46,0.9)", alignItems:"center"}}>
          <DialogContentText style={{color:"white", backgroundImage:"https://www.lifeder.com/wp-content/uploads/2020/09/propiedad-vivienda-min.jpg", marginBottom:"25px", fontSize:"18px", textAlign:"left", padding:"0px 250px"}}>
            Crear Publicación
          </DialogContentText>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <h4 style={{color:"white"}}>¿Que estas pensando?</h4>
            
            <TextInput
              onChange={(e) => setComment(e)}
              value={comment}              
              placeholder="Escribe aqui"
            />

        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>

          </Box>
        </DialogContent>
        <DialogActions style={{background:"rgba(34,37,46,0.9)"}}>
          <Button onClick={handleCommentRating} style={{color:"white"}}>ACEPTAR</Button>
          <Button onClick={Close} style={{color:"white"}}>CANCELAR</Button>
        </DialogActions>
</Dialog>

    {data.map(res => (
    <><Header.Container>
        <Header.Info>
          <Header.FeaturesContainer>        
            <Header.Features>
            <Header.Comments>
                <Header.BrokrImageContainer>
                  <Header.BrokrImage src={"res.name"} size={'60px'} />
                </Header.BrokrImageContainer>
                <Header.BrokrNameComment>
                <Rating
                  name="text-feedback"
                  value={res.rating}
                  readOnly
                  precision={1}
                  emptyIcon={<StarIcon style={{ opacity: 0.55, color:"#e5b88e"}} fontSize="inherit" />}
                />
                <Header.Names>
                  <h4>{res.name} {res.lastname}</h4>
                </Header.Names>

                  <Header.type>{res.work}</Header.type>
                </Header.BrokrNameComment>                
            </Header.Comments>              
            </Header.Features>
            <Header.Text>
              <h4>{res.comment}</h4>
          </Header.Text>
          <Header.ImagePropertyContainer>                        
            <Header.ImageProperty src={"res.archives.map((item:any) => item.location)"} size={''}/>
          </Header.ImagePropertyContainer>

          <Header.TotalM>{res.likes} Me gusta</Header.TotalM>

          <Header.FeaturesActions>
            <Header.CommentsActions>             
              <Stack direction="row" spacing={4} style={{color:"#4edebd", marginTop:"25px"}}>
                <Button variant="outlined" style={{color:"#4edebd", border:"none"}} startIcon={<ShareOutlinedIcon />}>
                  COMPARTIR
                </Button>
                <Button onClick={()=>console.log("Likes")} variant="outlined" style={{color:"#4edebd", border:"none"}} startIcon={<ThumbUpOutlinedIcon />}> ME GUSTA </Button>                         
                <Button variant="outlined" style={{color:"#4edebd", border:"none"}} startIcon={<PermPhoneMsgOutlinedIcon />}>
                  CONTACTAR
                </Button>
              </Stack>                               
            </Header.CommentsActions>              
            </Header.FeaturesActions>
          </Header.FeaturesContainer>
        </Header.Info>
        <br />       
    </Header.Container>
 </>
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
Header.Compartir = styled.p`
 color:white;
`;
Header.Like = styled.p`
 color:white;
 margin-left:55px;
`;
Header.Contact = styled.p`
 color:white;
 margin-left:55px;
`;
Header.ImagePropertyContainer = styled.div`  
  
`;
Header.ImageProperty = styled.img<{ size: number | string }>`
  width: 100%;
  height: 200px;  
  border-top-left-radius: 30px 30px;
  border-top-right-radius: 30px 30px;
  margin-left: 12px;
`;
Header.Names = styled.p`
  color: white;
`;
Header.Text = styled.div`
  margin-left: 12px;
  color:white;
`;
Header.TotalM = styled.div`
  margin-left: 12px;
  color:white;
  font.size: 15px;
  margin-top: 15px;
`;
Header.BrokrNameComment = styled.div`
  margin-left: 12px;
`;
Header.Comments = styled.div`
  width: 100%;
  padding: 0px 12px;
  margin-bottom: 5px;
  text-aling:justify-content;
  display: flex;
  justify-content: flex-start;
`;
Header.CommentsActions = styled.div`
  width: 100%;
  padding: 0px 12px;
  margin-bottom: 5px;
  text-aling:justify-content;
  display: flex;
  justify-content: flex-start;
`;
Header.ContainerTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
Header.Title = styled.div`
  display: flex;
  border-radius: 50%;
  margin-left: 25px;
  color:white;
  margin-bottom:35px;
`;

Header.Info = styled.div`
  width: 90%;  
  item-aling:center
`;

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

Header.FeaturesActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;  
`;

Header.Subtitle = styled.p`
  margin: 0;
  font-size: 35px;
  color: #e5b88e;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

Header.type = styled.p`
  color:#e5b88e;
`;

Header.FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 70px
`;

Header.Container = styled.div`
  background-color: #151a29;  
  width: 100%;
  justify-content: flex-start;
  align-items: center;  
`;

export default Header;
