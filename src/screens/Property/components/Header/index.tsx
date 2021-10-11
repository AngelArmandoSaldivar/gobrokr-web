import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../../../../assets/images/property/principal.png';
import Image1 from '../../../../assets/images/property/lateral-1.png';
import Image2 from '../../../../assets/images/property/lateral-2.png';
import axios from '../../../../api/index';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Header(props:any) {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('idProperty');
  const url = "http://localhost:3001/gb/api/v1/properties/" + id + "/" +"?access_token="+ token;
  console.log(url);

  const [price, setPrice] = useState('');   
  const [archives, setArchives] = useState([]);

  useEffect(() => {

    axios.get(url).then((res:any) => {
      setArchives(res.data.archives);      
      setPrice(res.data.price);
    })
    .catch(err => console.log(err))
    
  }, []);  

  
  return (
    
    <Header.Container>
     <Carousel showArrows={true}>    
       {archives.map((item:any) => (
           <Header.ImagePropertyContainer>   
              <Header.img src={item.location} size={''}/>
            </Header.ImagePropertyContainer>
        ))}

    </Carousel>    
    </Header.Container>    
  );
}
Header.img = styled.img<{ size: number | string }>`
  width: 100%;
  height: 470px;
`;
Header.ImagePropertyContainer = styled.div`
  
`;

Header.Container = styled.div`
  display: flex;
  height: 70vh;
  position: relative;
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
