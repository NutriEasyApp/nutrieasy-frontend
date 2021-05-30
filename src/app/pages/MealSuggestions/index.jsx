import React, { useState, useEffect } from "react";
import { Image, ScrollView, SafeAreaView } from "react-native";
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
} from "./style";

const ImgRecipes1 = require("../../assets/images/recipes-1.jpg");
const ImgRecipes2 = require("../../assets/images/recipes-2.jpg");
const ImgRecipes3 = require("../../assets/images/recipes-3.jpg");
const ImgRecipes4 = require("../../assets/images/recipes-4.jpg");
const ImgRecipes5 = require("../../assets/images/recipes-5.jpg");

const dietData = {
  getMeals: {
    lunchAndDinner: {
      portionRice: {
        amount: "",
        type: "",
      },
      portionGrilledRump: {
        amount: "",
        type: "",
      },
      portionChesse: {
        amount: "",
        type: "",
      },
    },
    breakfast: {
      portionCereal: {
        amount: "",
        type: "",
      },
      portionEgg: {
        amount: "",
        type: "",
      },
      portionCashewNut: {
        amount: "",
        type: "",
      },
    },
    morningAndAfterSnack: {
      portionBread: {
        amount: "",
        type: "",
      },
      portionTuna: {
        amount: "",
        type: "",
      },
      portionMayonnaise: {
        amount: "",
        type: "",
      },
    },
  },
};

export default function MealSuggestions() {
  const [proposed, setProposed] = useState(dietData);
  const [diet, setDiet] = useState(false);
  useEffect(() => {
    async function getDiet() {
      try {
        const user = await AsyncStorage.getItem("@RNAuth:user");
        const response = await api.get(`/diet/${user}`);
        setProposed(response.data);
        setDiet(true);
      } catch (err) {
        console.log("error");
        const { status } = err.response;
        if (status === 404) {
          //console.log('Parece que você ainda não cadastrou sua ficha de saude');
          setDiet(false);
        }
        if (status === 401) {
          signOut();
        }
      }
    }
    getDiet();
  }, []);
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitlePage>Sugestões de Refeições</TitlePage>
          <Text>
            Separamos para você, sugestões de refeições com objetivo de obter uma alimentação equilibrada e saudável. Estão divididos em 5
            refeições ao dia, com a quantidade de porção exata de cada alimento para ingerir.
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
                  <Value>{proposed.getMeals.breakfast.portionCereal.amount} unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Ovo</Portion>
                  <Value>{proposed.getMeals.breakfast.portionEgg.amount} unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Castanha de Caju</Portion>
                  <Value>{proposed.getMeals.breakfast.portionCashewNut.amount} gramas</Value>
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
                  <Portion>Pão</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionBread.amount} unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionTuna.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionMayonnaise.amount} gramas</Value>
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
                  <Portion>Arroz</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionRice.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionGrilledRump.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionChesse.amount} gramas</Value>
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
                  <Portion>Pão</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionBread.amount} unidades</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Atum</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionTuna.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Maionese</Portion>
                  <Value>{proposed.getMeals.morningAndAfterSnack.portionMayonnaise.amount} gramas</Value>
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
                  <Portion>Arroz</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionRice.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Alcatra Grelhada</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionGrilledRump.amount} gramas</Value>
                </ColumnInfo>

                <ColumnInfo>
                  <Portion>Queijo</Portion>
                  <Value>{proposed.getMeals.lunchAndDinner.portionChesse.amount} gramas</Value>
                </ColumnInfo>
              </SectionInfo>
            </Wrapper>
          </Recipes>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
