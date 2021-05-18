import React from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Nav>
        <NavItem>
            <MaterialCommunityIcons name="lock" color={'#fff'} size={20} />
          <NavText>Alterar Senha</NavText>
        </NavItem>
        <NavItem>
            <MaterialCommunityIcons name="information" color={'#fff'} size={20} />
          <NavText>Sobre o aplicativo</NavText>
        </NavItem>
        <NavItem>
            <MaterialCommunityIcons name="file-document-edit" color={'#fff'} size={20} />
          <NavText>Termos de Uso</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
