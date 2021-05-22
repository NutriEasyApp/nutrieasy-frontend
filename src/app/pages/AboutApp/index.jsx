import * as React from 'react';
import { Container, Wrapper, Text, Title, Back } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutApp({navigation}) {
  return (
    <Container>
      <Back>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color="#90cc0c"
            onPress={() => navigation.goBack()}
          />
        </Back>
      <Wrapper>
        <Title>Sobre o Aplicativo</Title>
          <Text>NutriEasy tem como  capaz de desenvolver uma proposta de dieta baseado no porte físico atual da pessoa e no seu objetivo físico. Contém uma ficha de ánalise de saúde para cadastro de informações das características da pessoa, sistema de divisão de refeições: fornecendo os números adequados dos nutrientes para cada montante de refeição, seja durante o dia ou um total por refeições.</Text>
          <Text>Possui gráficos apresentando os dados do histórico em comparação a peso, caloria e tempo de exercício. Com todas essas informações, dispoe ao usuário gerar um arquivo em PDF com as informações. Os desenvolvedores do Projeto são: Davi França Marcelino, Gabriel Aragão Alonso e Lucas Eduardo Mori.</Text>    
      </Wrapper>
    </Container>
  );
}
