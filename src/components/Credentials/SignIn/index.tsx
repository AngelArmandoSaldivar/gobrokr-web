import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import { SignInProps } from '../types';
import { TextInput, ButtonComponent as Button } from '../../../components';
import { SignUp, RecoverPassword } from './components';
import axios from '../../../api/index';
import Swal from 'sweetalert2';

function SignIn(props: SignInProps) {  

  const [signUp, setSignUp] = useState(false);    
  const [recoverPassword, setRecoverPassword] = useState(false);
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');    
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const { isOpen, onClose } = props;
  const [name, setName] = useState('');

  const authUser = async (e: string) => {

    const data = {email, password};

      if(email && password){     
        const res = await axios.post('http://localhost:3001/gb/api/v1/users/login', data)
        .then(res => {  
          localStorage.setItem('token',res.data.id);
            window.location.href = '/populars';
        }).
        catch(err => {
          Swal.fire({
            text: "Error al iniciar sesión \n Verifica tus datos y vuelve a intentar.",     
            html:
            '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
            '<p style="color:white;">Error al iniciar sesión. \n</p>' +
            '<p style="color:white;">Verifica tus datos y vuelve a intentar.</p>',  
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
        });     
      } else if(password == "" && email == "") {
        setErrorEmail('Ingresar correo!');
        setErrorPassword('Ingresar contraseña!');
      } else if(email == "") {
        setErrorEmail('Ingresar correo!');
      } else if(password == "") {
        setErrorPassword('Ingresar contraseña!');
      }
      
  }

  const title = signUp
    ? 'Crear cuenta'
    : recoverPassword
    ? 'Recuperar contraseña'
    : 'Iniciar sesión en tu cuenta';    
    

  return (
    <Layout
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      isFullScreen={signUp}
    >
      <SignIn.Container>
        {!signUp && !recoverPassword && (
          <SignIn.Information>
            <SignIn.InputContainer>
              <TextInput
                onChange={(e) => setEmail(e)}
                value={email}
                placeholder="Correo"
              />
            </SignIn.InputContainer>
            <SignIn.Error>{errorEmail}</SignIn.Error>
            <SignIn.InputContainer>
              <TextInput
                onChange={(e) => setPassword(e)}
                value={password}
                placeholder="Contraseña"
              />
            </SignIn.InputContainer>
            <SignIn.Error>{errorPassword}</SignIn.Error>
            <SignIn.Actions>
              <SignIn.Action onClick={() => setSignUp(true)}>
                Crear Cuenta
              </SignIn.Action>
              <SignIn.Action onClick={() => setRecoverPassword(true)}>
                Recuperar contraseña
              </SignIn.Action>                
            </SignIn.Actions>
            {true && <Button onClick={authUser}>INICIAR SESION</Button>} 
          </SignIn.Information>         
        )}

        {signUp && (
          <SignUp
            setSignUp={setSignUp}
            setRecoverPassword={setRecoverPassword}
          />
        )}
        {recoverPassword && (
          <RecoverPassword
            setSignUp={setSignUp}
            setRecoverPassword={setRecoverPassword}
          />
        )}
      </SignIn.Container>
    </Layout>
  );
}

SignIn.Container = styled.div``;
SignIn.Information = styled.div``;
SignIn.InputContainer = styled.div`
  margin-bottom: 15px;
`;

SignIn.Error = styled.h3`
  color:red;
  font-size: 15px;    
`;

SignIn.Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0px 30px 0px;
`;

SignIn.Action = styled.button`
  border: none;
  background: transparent;
  color: #4fe3c1;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 10px;
  transition: background 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #1b1e24;
  }
`;

export default SignIn;
