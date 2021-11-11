import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../../api/index';
import Swal from 'sweetalert2';

import {
  TextInput,
  ButtonComponent as Button
} from '../../../../../components';
import { ComponentProps } from '../types';

function RecoverPassword(props: ComponentProps) {
  const { setSignUp, setRecoverPassword } = props;
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);//No se sabe si hay un usuario autenticado

  const resetPassword = async (e: string) => {          

    const data = {email};

    try{      

      if(email){
      const res = await axios.post('http://localhost:3001/gb/api/v1/users/resetpassword', data)
      let responseJSON = res;

      if(responseJSON.data) {
        setUser(res.data);
        Swal.fire({                      
          html:
          '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
          '<p style="color:white;">Te hemos enviado un correo para que\n</p>' +
          '<p style="color:white;">puedas recuperar tu contraseña.</p>',
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
      }else{
        console.log('Recuperación de contraseña fallida');
      }
    }

    }catch (err) {
      Swal.fire({                      
        html:
        '<p style="color:#e5b88e; font-size:20px;">GoBrokr</p> \n' +
        '<p style="color:white;">El correo no existe\n</p>',        
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
    }
  }



  const goToSignIn = () => {
    setRecoverPassword(false);
    setSignUp(false);
  };

  const goToSignUp = () => {
    setRecoverPassword(false);
    setSignUp(true);
  };

  return (
    <RecoverPassword.Container>
      <RecoverPassword.InputContainer>
        <TextInput
          onChange={(e) => setEmail(e)}
          value={email}
          placeholder="Correo"
        />
      </RecoverPassword.InputContainer>
      <RecoverPassword.Actions>
        <RecoverPassword.Action onClick={goToSignUp}>
          Crear Cuenta
        </RecoverPassword.Action>
        <RecoverPassword.Action onClick={goToSignIn}>
          Iniciar Sesión
        </RecoverPassword.Action>
      </RecoverPassword.Actions>
      <Button onClick={resetPassword}>RECUPERAR</Button>
    </RecoverPassword.Container>
  );
}

RecoverPassword.Container = styled.div``;
RecoverPassword.InputContainer = styled.div`
  margin-bottom: 15px;
`;
RecoverPassword.Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0px 30px 0px;
`;
RecoverPassword.Action = styled.button`
  border: none;
  background: transparent;
  color: #4fe3c1;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 10px;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1b1e24;
  }
`;

export default RecoverPassword;
