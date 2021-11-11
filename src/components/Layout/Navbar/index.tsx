import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
import CtaIcon from '../../../assets/icons/cta-icon.svg';
import BurgerIcon from '../../../assets/icons/burger-menu.svg';
import { useLocation } from 'react-router-dom';
import { NavbarProps } from './types';

interface LinkProps {
  isLast?: boolean;
  isActive?: boolean;
}

function Navbar(props: NavbarProps) {
  let location = useLocation();
  const { pathname } = location;
  const { onOpenModal } = props;

  return (
    <Navbar.Container>
      <Navbar.MobileMenu>
        <Navbar.MobileButton>
          <Navbar.MenuIcon src={BurgerIcon} />
        </Navbar.MobileButton>
      </Navbar.MobileMenu>
      <Navbar.LogoContainer>
        <Navbar.Logo src={Logo} />
      </Navbar.LogoContainer>
      <Navbar.LinksContainer>
        <Navbar.Link to={'/'} isActive={pathname === '/'}>
          Inicio
        </Navbar.Link>
        <Navbar.Link to={'/rent'} isActive={pathname === '/rent'}>
          Rentar
        </Navbar.Link>
        <Navbar.Link to={'/'}>Desarrollo</Navbar.Link>
        <Navbar.Link to={'/contact'} isActive={pathname === '/contact'}>
          Contacto
        </Navbar.Link>
        <Navbar.Link to={'/'} isLast>
          Brokrs
        </Navbar.Link>
      </Navbar.LinksContainer>
      <Navbar.CTAContainer onClick={onOpenModal}>
        <Navbar.Button>
          <Navbar.CTA>Publicar Gratis</Navbar.CTA>
          <Navbar.Icon src={CtaIcon} />
        </Navbar.Button>
      </Navbar.CTAContainer>
    </Navbar.Container>
  );
}

Navbar.Container = styled.div`
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
Navbar.LogoContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
Navbar.MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
Navbar.MobileButton = styled.button`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
Navbar.MenuIcon = styled.img``;

Navbar.Logo = styled.img``;

//Links styles
Navbar.LinksContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
Navbar.Link = styled(Link)<LinkProps>`
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
Navbar.CTAContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: none;
  }
`;

Navbar.Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

Navbar.CTA = styled.div`
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
Navbar.Icon = styled.img``;

export default Navbar;
