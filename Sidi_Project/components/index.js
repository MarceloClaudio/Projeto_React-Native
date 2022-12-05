import React from 'react';
import { Text, View } from 'react-native';
 
//import { Container } from './styles';
//import Logo from '../../assets/logo-makerclub.png';

function Header() {
  return(

    <View>
    <Text>Notice that the status bar has light text!</Text>
    {/* <StatusBar style="light" /> */}
  </View>
    //  <Container>
    //   <Image
    //     source={Logo}
    //   />
    //  </Container>
  )
}

export default Header;