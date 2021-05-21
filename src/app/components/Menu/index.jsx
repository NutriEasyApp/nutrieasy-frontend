import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ translateY }) {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();

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
            <TouchableOpacity onPress={() => {navigation.navigate('ChangePassword')}}>
              <NavText>Alterar Senha</NavText>
            </TouchableOpacity>
          </NavItem>
          
          <NavItem>
            <MaterialCommunityIcons
              name="information"
              color={'#fff'}
              size={20}
            />
            <TouchableOpacity onPress={() => {navigation.navigate('AboutApp')}}>
              <NavText>Sobre o aplicativo</NavText>
            </TouchableOpacity>
          </NavItem>

          <NavItem>
            <MaterialCommunityIcons
              name="file-document-edit"
              color={'#fff'}
              size={20}
            />
             <TouchableOpacity onPress={() => {navigation.navigate('TermsOfUse')}}>
              <NavText>Termos de Uso</NavText>
            </TouchableOpacity>
          </NavItem>
        </Nav>

        <SignOutButton onPress={signOut}>
          <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
      </Container>
  );
}