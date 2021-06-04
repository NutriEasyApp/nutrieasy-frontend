import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, ScrollView, SafeAreaView, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Wrapper, Text, TitlePage, Title, Recipes, SafeAreaViewStyle, Portion, Value, SectionImg, SectionInfo, ColumnInfo, WrapperError, Message, Icon } from "./style";

import api from "../../services/api";
import AuthContext from "../../contexts/auth";

const ImgRecipes1 = require("../../assets/images/recipes-1.jpg");
const ImgRecipes2 = require("../../assets/images/recipes-2.jpg");
const ImgRecipes3 = require("../../assets/images/recipes-3.jpg");
const ImgRecipes4 = require("../../assets/images/recipes-4.jpg");
const ImgRecipes5 = require("../../assets/images/recipes-5.jpg");

const dietData = {
  breakfast: {
    portionCashewNut: {
      amount: "",
      type: "",
    },
    portionCereal: {
      amount: "",
      type: "",
    },
    portionYogurt: {
      amount: "",
      type: "",
    },
  },

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
};

export default function MealSuggestions() {
  const { signOut } = useContext(AuthContext);
  const [proposed, setProposed] = useState(dietData);
  const [diet, setDiet] = useState(false);

  useEffect(() => {
    async function getDietMeals() {
      try {
        const user = await AsyncStorage.getItem("@RNAuth:user");
        const response = await api.get(`/diet/meals/${user}`);
        setProposed(response.data);
        setDiet(true);
      } catch (err) {
        console.log("Aqui");
        const { status } = err.response;
        if (status === 404) {
          //console.log('Parece que você ainda não cadastrou sua ficha de saude');
          return setDiet(false);
        }
        // if (status === 401) {
        return signOut();
        // }
      }
    }
    getDietMeals();
  }, []);
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitlePage>Sugestões de Refeições</TitlePage>
          <Text>
            Separamos para você, sugestões de refeições com objetivo de obter uma alimentação equilibrada e saudável. Estão divididos entre 2 a 5, com a quantidade de porção exata de cada alimento
            para ingerir.
          </Text>
          {diet ? (
            <View>
              {proposed.breakfast && (
                <Recipes>
                  <Title>Café da Manhã</Title>
                  <SectionImg>
                    <Image source={ImgRecipes1}></Image>
                  </SectionImg>

                  <Wrapper>
                    <SectionInfo>
                      {proposed.breakfast && (
                        <>
                          <ColumnInfo>
                            <Portion>Cereal</Portion>
                            <Value>{proposed.breakfast.portionCereal.amount}g</Value>
                          </ColumnInfo>

                          <ColumnInfo>
                            <Portion>Iogurte</Portion>
                            <Value>{proposed.breakfast.portionYogurt.amount}ml</Value>
                          </ColumnInfo>

                          <ColumnInfo>
                            <Portion>Castanha de Caju</Portion>
                            <Value>{proposed.breakfast.portionCashewNut.amount}g</Value>
                          </ColumnInfo>
                        </>
                      )}
                    </SectionInfo>
                  </Wrapper>
                </Recipes>
              )}
              {proposed.morningAndAfterSnack && (
                <Recipes>
                  <Title>Lanche da Manhã / Tarde</Title>
                  <SectionImg>
                    <Image source={ImgRecipes2}></Image>
                  </SectionImg>
                  <Wrapper>
                    <SectionInfo>
                      {proposed.morningAndAfterSnack && (
                        <>
                          <ColumnInfo>
                            <Portion>Pão</Portion>
                            <Value>
                              {proposed.morningAndAfterSnack.portionBread.amount}
                              un
                            </Value>
                          </ColumnInfo>

                          <ColumnInfo>
                            <Portion>Atum</Portion>
                            <Value>{proposed.morningAndAfterSnack.portionTuna.amount}g</Value>
                          </ColumnInfo>

                          <ColumnInfo>
                            <Portion>Maionese</Portion>
                            <Value>{proposed.morningAndAfterSnack.portionMayonnaise.amount}g</Value>
                          </ColumnInfo>
                        </>
                      )}
                    </SectionInfo>
                  </Wrapper>
                </Recipes>
              )}
              <Recipes>
                <Title>Almoço / Jantar</Title>
                <SectionImg>
                  <Image source={ImgRecipes3}></Image>
                </SectionImg>
                <Wrapper>
                  <SectionInfo>
                    {proposed.lunchAndDinner && (
                      <>
                        <ColumnInfo>
                          <Portion>Arroz</Portion>
                          <Value>{proposed.lunchAndDinner.portionRice.amount}g</Value>
                        </ColumnInfo>

                        <ColumnInfo>
                          <Portion>Alcatra Grelhada</Portion>
                          <Value>{proposed.lunchAndDinner.portionGrilledRump.amount}g</Value>
                        </ColumnInfo>

                        <ColumnInfo>
                          <Portion>Queijo</Portion>
                          <Value>{proposed.lunchAndDinner.portionChesse.amount}g</Value>
                        </ColumnInfo>
                      </>
                    )}
                  </SectionInfo>
                </Wrapper>
              </Recipes>
            </View>
          ) : (
            <View>
              <Recipes>
                <Wrapper>
                  <SectionInfo>
                    <>
                      <Icon>
                        <MaterialCommunityIcons name="alert" color={"#f02849"} size={45} />
                      </Icon>
                      <Message>Parece que você ainda não cadastrou sua ficha de saúde.</Message>
                    </>
                  </SectionInfo>
                </Wrapper>
              </Recipes>
            </View>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}