import styled from 'styled-components';


function Header(props:any) {

  return (
    <><Header.Container>
        <Header.Info>
          <Header.FeaturesContainer>
            <Header.Subtitle> Mis favoritos </Header.Subtitle> <br /><br />           
          </Header.FeaturesContainer>
        </Header.Info>
        <br />
    </Header.Container>
  </>
  );
}

Header.Info = styled.div`
  width: 90%;  
  item-aling:center
`;
Header.Subtitle = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
Header.FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 70px
`;
Header.Container = styled.div`
  background-color: #1d202d;
  display: flex;
`;
export default Header;
