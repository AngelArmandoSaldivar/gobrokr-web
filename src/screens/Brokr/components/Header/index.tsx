import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../api/index';
import { RatingStar } from "rating-star";

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
      <Header.Info>
      <Header.FeaturesContainer>
          <Header.Subtitle> BROKR: </Header.Subtitle> <br/><br/>
          <Header.Features>
          <Header.Feature>
            <Header.BrokrImageContainer>                      
              <Header.BrokrImage src={''} size={'60px'} />
            </Header.BrokrImageContainer>
            </Header.Feature>
            <Header.Feature>              
              <Header.FeatureInfo>{'Name Brokr'}</Header.FeatureInfo>
            </Header.Feature>
            <Header.Feature>              
              <Header.FeatureInfo>

              <Header.StarsContainer>                                    
                < RatingStar 
                  id = "custom-icon-wow" 
                  rating = {Number(5)}
                  colors = { {  mask : "# 43a7e3"  } } 
                  noBorder 
                  maxScore = {5}
                  size = {15}

                />                     
              </Header.StarsContainer>

              </Header.FeatureInfo>
            </Header.Feature>
            <Header.Feature>              
              <Header.FeatureInfo>{0} Propiedades</Header.FeatureInfo>
            </Header.Feature>
            <Header.Feature>              
              <Header.FeatureInfo>{5} Comentarios</Header.FeatureInfo>
            </Header.Feature>           
          </Header.Features>
        </Header.FeaturesContainer>
        </Header.Info>
    </Header.Container>    
  );
}

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
