import React from 'react';
import { Container, Text, StyleIcon } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <Text>NutriEasy App</Text>
      <Icon
        name="keyboard-arrow-down"
        size={35}
        color="#fff"
        style={StyleIcon}
      />
    </Container>
  );
}
