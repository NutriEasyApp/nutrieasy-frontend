import * as React from 'react';
import { Image, ScrollView, SafeAreaView } from 'react-native';
import {
  Container,
  Wrapper,
  Text,
  TitlePage,
  Title,
  Recipes,
  SafeAreaViewStyle,
  Portion,
  Value,
  SectionImg,
  SectionInfo,
  ColumnInfo,
} from './style';

const ImgRecipes1 = require('../../assets/images/recipes-1.jpg');
const ImgRecipes2 = require('../../assets/images/recipes-2.jpg');
const ImgRecipes3 = require('../../assets/images/recipes-3.jpg');
const ImgRecipes4 = require('../../assets/images/recipes-4.jpg');
const ImgRecipes5 = require('../../assets/images/recipes-5.jpg');

export default function MealSuggestions({ navigation }) {
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitlePage>Sugestões de Refeições</TitlePage>
          <Text>
            Separamos para você, sugestões de refeições com objetivo de obter
            uma alimentação equilibrada e saudável. Estão divididos em 5
            refeições ao dia, com a quantidade de porção exata de cada alimento
            para ingerir.
          </Text>

          <Recipes>
            <Title>Café da Manhã</Title>
            <SectionImg>
              <Image source={ImgRecipes1}></Image>
            </SectionImg>

            <Wrapper>
              <SectionInfo>
                <ColumnInfo>
                  <Portion>Cereal</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>250 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Pão</Portion>
                  <Value>5 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>15 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>20 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Arroz</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>

          <Recipes>
            <Title>Lanche da Manhã</Title>
            <SectionImg>
              <Image source={ImgRecipes2}></Image>
            </SectionImg>
            <Wrapper>
              <SectionInfo>
                <ColumnInfo>
                  <Portion>Cereal</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>250 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Pão</Portion>
                  <Value>5 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>15 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>20 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Arroz</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>

          <Recipes>
            <Title>Almoço</Title>
            <SectionImg>
              <Image source={ImgRecipes3}></Image>
            </SectionImg>
            <Wrapper>
              <SectionInfo>
                <ColumnInfo>
                  <Portion>Cereal</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>250 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Pão</Portion>
                  <Value>5 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>15 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>20 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Arroz</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>

          <Recipes>
            <Title>Lanche da Tarde</Title>
            <SectionImg>
              <Image source={ImgRecipes4}></Image>
            </SectionImg>
            <Wrapper>
              <SectionInfo>
                <ColumnInfo>
                  <Portion>Cereal</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>250 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Pão</Portion>
                  <Value>5 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>15 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>20 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Arroz</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>

          <Recipes>
            <Title>Janta</Title>
            <SectionImg>
              <Image source={ImgRecipes5}></Image>
            </SectionImg>
            <Wrapper>
              <SectionInfo>
                <ColumnInfo>
                  <Portion>Cereal</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>350 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>250 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Pão</Portion>
                  <Value>5 unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>15 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>20 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Arroz</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>200 gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
