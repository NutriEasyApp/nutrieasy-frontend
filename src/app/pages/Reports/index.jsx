import React from 'react';
import { Image } from 'react-native';
import { Container, Button, Title, Text, TextButton, Wrapper } from './style';

import img from '../../assets/images/reports-img300.png';

export default function Reports() {
  return (
    <Container>
      <Wrapper>
        <Image source={img}></Image>
        <Title>Relatórios</Title>
        <Text>Gráficos e Refeições</Text>
      </Wrapper>
      
      <Wrapper>
        <Button>
          <TextButton>Gerar Relatório</TextButton>
        </Button>
      </Wrapper>
    </Container>
  );
}
