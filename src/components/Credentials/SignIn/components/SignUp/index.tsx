import React, {useState} from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../../../components';
import { ComponentProps } from '../types';
import axios from 'axios';

function SignUp(props: ComponentProps) {
  const { setSignUp, setRecoverPassword } = props;
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');  
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  console.log(name);

  const goToSignIn = () => {    
    setRecoverPassword(false);
    setSignUp(false);
  };

  const registerUser = async () => {

    var deviceId = "50f2a770-76a6-496e-a7c1-735f3542b7c5";

    const data = {name, lastname, email, birthdate, password, deviceId};

    try{

      console.log(email);

      if(email && password){
      const res = await axios.post('http://localhost:3001/gb/api/v1/users', data);
      let responseJSON = res;
      if(responseJSON.data) {        
        setUser(res.data);
        alert('Registro con exito');
      }else{
        alert('No se pudo realizar el registro');
      }
      
    /*   setToken(res.data.id);    
      alert('Logueado con exito');  */ 
    }

    }catch (err) {
     console.log('Falla en el registro de usuario', err);
    }

  }

  return (
    <SignUp.Container>
      <SignUp.InputContainer>
        <SignUp.Label>Hola, ¿Cuál es tu nombre? </SignUp.Label>
        <TextInput
          onChange={(e) => setName(e)}
          value={name}
          placeholder="Nombre"
        />
        <TextInput
          onChange={(e) => setLastname(e)}
          value={lastname}
          placeholder="Apellidos"
        />
        <SignUp.Info>Este nombre aparecerá en tu peril de GoBrokr.</SignUp.Info>
      </SignUp.InputContainer>
      <SignUp.InputContainer>
        <SignUp.Label>¿Cuál es correo?</SignUp.Label>
        <TextInput
          onChange={(e) => setEmail(e)}
          value={email}
          placeholder="Correo"                
        />
        <SignUp.Info>
          Tu dirección de correo será un punto de contacto en GoBrokr.
        </SignUp.Info>
      </SignUp.InputContainer>
      <SignUp.InputContainer>
        <SignUp.Label>
          Ingresa una contraseña para tu cuenta de GroBrokr.
        </SignUp.Label>
        <TextInput
          onChange={(e) => setPassword(e)}
          value={password}
          placeholder="Contraseña"
        />      
        <SignUp.Info>
          Tu contraseña deberá constar de al menos 8 caracteres.
        </SignUp.Info>
      </SignUp.InputContainer>
      <SignUp.InputContainer>
        <SignUp.Label>¿Cuál es tu fecha de nacimiento?</SignUp.Label>
        <TextInput
          onChange={(e) => setBirthdate(e)}
          value={birthdate}
          placeholder="Fecha de nacimiento"
        />
        <SignUp.Info>
          Para poder registrarte deberás tener como mínimo 18 años.
        </SignUp.Info>
      </SignUp.InputContainer>
      <SignUp.SubmitContainer >
        <SignUp.Submit onClick={registerUser}>CREAR CUENTA</SignUp.Submit>
        <SignUp.SignIn onClick={goToSignIn}>INICIAR SESION</SignUp.SignIn>
      </SignUp.SubmitContainer>
      <SignUp.TermsContainer>
        <SignUp.TermsInfo>
          Los demás usuarios no podrán ver tu fecha de nacimiento.
        </SignUp.TermsInfo>
        <SignUp.TermsInfo>
          Al crear cuenta, estarás aceptando los{' '}
          <a href="#">TÉRMINO Y CONDICIONES DE USO</a> de GoBrokr.
        </SignUp.TermsInfo>
        <SignUp.TermsInfo>
          Para obtener más información sobre la manera en que GoBrokr recopila,
          utiliza y protege tus datos personales, consulta la{' '}
          <a href="#">POLÍTICA DE PRIVACIDAD</a> de GoBrokr.
        </SignUp.TermsInfo>
      </SignUp.TermsContainer>
    </SignUp.Container>
  );
}

const buttonsProps = `
  padding: 15px 50px;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  border: none;
  opacity: 1;
  transition: opacity 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

SignUp.Container = styled.div``;

SignUp.Label = styled.p`
  margin-bottom: 20px;
  color: white;
  font-weight: lighter;
  font-size: 20px;
`;

SignUp.Info = styled.p`
  font-size: 14px;
  color: white;
  margin: 0;
  text-align: right;
`;

SignUp.InputContainer = styled.div`
  margin-bottom: 50px;
  > input {
    margin-bottom: 15px;
  }
`;

SignUp.SubmitContainer = styled.div`
  margin-bottom: 50px;
`;

SignUp.Submit = styled.button`
  ${buttonsProps};
  background: #e5b88e;
  color: white;
`;

SignUp.SignIn = styled.button`
  ${buttonsProps};
  color: #4fe3c1;
  background: transparent;
  box-shadow: none;
  margin-left: 20px;
`;

SignUp.TermsContainer = styled.div``;

SignUp.TermsInfo = styled.p`
  font-size: 18px;
  color: white;

  > a {
    color: #4fe3c1;
  }
`;

export default SignUp;
