import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BrokrPlaceholder from '../../../../assets/icons/brokr-placeholder.svg';
import Star from '../../../../assets/icons/star.svg';
import { UserInfoProps } from './types';
import axios from 'axios';
import { forEach } from 'ramda';

export function UserInfo(props: UserInfoProps) {
  const { textSize = '14px', imageSize = '40px', starsSize = '14px' } = props;

  const [user, setUser] = useState([]);

  const lat = 19.1810867004275;
  const lng = -99.5875018929126;
  const token = "MVRz7hgVIfYfglHe10pE9Lx7WDyKjV3GY4d4JRppv7Dwb1UeEAMtImiqstNVMbjp";
  const url = "http://localhost:3001/gb/api/v1/popularproperties/home/" + lat + '/' + lng  + "/" +"?access_token="+ token;       

  useEffect(() => {       
    axios.get(url).then( res => {
     setUser(res.data.properties);     
    })
    .catch(err => {
      console.log(err);
    })    

  }, []);

  return (
  
    <>  
    </> 
  );
}

//brokr info styles
UserInfo.BrokrInfo = styled.div`
  display: flex;
  align-items: center;
`;
UserInfo.BrokrImageContainer = styled.div`
  display: flex;
`;
UserInfo.BrokrImage = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
UserInfo.BrokrNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex: 1;
`;
UserInfo.BrokrName = styled.span<{ size: number | string }>`
  color: white;
  font-size: ${({ size }) => size};
`;
UserInfo.StarsContainer = styled.div`
  margin-top: 5px;
`;
UserInfo.Star = styled.img<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;
