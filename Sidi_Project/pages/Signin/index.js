import React from 'react';
import { KeyboardView, Title, Container, Input, ButtonSubmit, TextButton } from './styles';
import { Image } from 'react-native';
import Logo from '../../assets/Logo.png';
import Header from '../../components/Header';

function Signin() {
  return(
    <KeyboardView>
      <Header />
      <Container>
      <Image
         source={Logo}
       />
        <Title>Login</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="Login"
        />
        <Input class='Password'
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton onclick='loginApp'>
            Entrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

function loginApp(){
  let inputs = document.getElementsByClassName('Password');
    for (let Input of inputs){
      
    }


}


export default Signin;