import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
import CtaIcon from '../../../assets/icons/cta-icon.svg';
import BurgerIcon from '../../../assets/icons/burger-menu.svg';
import { useLocation } from 'react-router-dom';
import { NavbarPropertiesProps } from './types';

interface LinkProps {
  isLast?: boolean;
  isActive?: boolean;
}

function NavbarProperties(props: NavbarPropertiesProps) {
  let location = useLocation();
  const { pathname } = location;
  const { onOpenModal } = props;

  return (
    <NavbarProperties.Container>
      <NavbarProperties.MobileMenu>
        <NavbarProperties.MobileButton>
          <NavbarProperties.MenuIcon src={BurgerIcon} />
        </NavbarProperties.MobileButton>
      </NavbarProperties.MobileMenu>
      <NavbarProperties.LogoContainer>
        <NavbarProperties.Logo src={Logo} />
      </NavbarProperties.LogoContainer>
      <NavbarProperties.LinksContainer>
        <NavbarProperties.Link to={'/populars'} isActive={pathname === '/'}>
          Inicio
        </NavbarProperties.Link>        
        {/* <NavbarProperties.Link to={'/'}>Desarrollo</NavbarProperties.Link> */}
        <NavbarProperties.Link to={'/'} isLast>
          Mis propiedades
        </NavbarProperties.Link>         
        <NavbarProperties.Link to={'/community'} isLast>
          Comunidad
        </NavbarProperties.Link>      
        <NavbarProperties.Link to={'/favorites'} isLast>
          Mis favoritos
        </NavbarProperties.Link>  
        <NavbarProperties.Link to={'/'} >
          Salir
        </NavbarProperties.Link>
      </NavbarProperties.LinksContainer>
      <NavbarProperties.CTAContainer onClick={onOpenModal}>
        <NavbarProperties.Button>          
          <NavbarProperties.Icon src={CtaIcon} />
        </NavbarProperties.Button>
      </NavbarProperties.CTAContainer>
    </NavbarProperties.Container>
  );
}

NavbarProperties.Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 100px;
  height: 80px;
  background-color: #22252e;
  box-shadow: inset 0px 4px 4px #191c24;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0px 20px;
  }
`;

//Logo styles
NavbarProperties.LogoContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
NavbarProperties.MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
NavbarProperties.MobileButton = styled.button`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
NavbarProperties.MenuIcon = styled.img``;

NavbarProperties.Logo = styled.img``;

//Links styles
NavbarProperties.LinksContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
NavbarProperties.Link = styled(Link)<LinkProps>`
  font-size: 16px;
  border: ${({ isActive }) => (isActive ? '1px solid #E5B88E' : 'none')};
  color: ${({ isActive }) => (isActive ? '#4FE3C1' : 'white')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  margin-right: ${({ isLast }) => (isLast ? '0px' : '30px')};
  padding: 10px 20px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;\
  transition: all .5s ease;

  &:hover {
    background-color: #e5b88e;
    color: black;
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

//CTA styles
NavbarProperties.CTAContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: none;
  }
`;

NavbarProperties.Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

NavbarProperties.CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4fe3c1;
  box-shadow: inset 0px 4px 4px rgba(120, 117, 117, 0.25);
  border-radius: 10px;
  border: none;
  margin-right: 5px;
  color: #22252e;
  font-weight: bold;
  height: 100%;
  padding: 0px 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
NavbarProperties.Icon = styled.img``;

export default NavbarProperties;
