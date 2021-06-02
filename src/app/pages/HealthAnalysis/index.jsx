import React, { useEffect, useState, useContext } from "react";
import { View, ScrollView, SafeAreaView, Image } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

import { SliderRange } from "../../components/Slider/SliderRange";

import AuthContext from "../../contexts/auth";
import api from "../../services/api";

import {
  Container,
  Title,
  Label,
  Button,
  Text,
  SafeAreaViewStyle,
  CalendarMonthStyle,
  DateInputStyle,
  RadioButtonGroupStyle,
  Calendar,
  BirthDate,
  SliderRangeLabel,
  ValueRadioButton,
  Flex,
  Radio,
  ImgBodytype,
} from "./style";

const EctomorfoF = require("../../assets/images/Ectomorfo-f.png");
const EctomorfoM = require("../../assets/images/Ectomorfo-m.png");
const EndomorfoF = require("../../assets/images/Endomorfo-f.png");
const EndomorfoM = require("../../assets/images/Endomorfo-m.png");
const MesomorfoF = require("../../assets/images/Mesomorfo-f.png");
const MesomorfoM = require("../../assets/images/Mesomorfo-m.png");

function FormatStringDateBrToEua(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

function FormatStringDateEuaToBr(data) {
  var dia = data.split("-")[0];
  var mes = data.split("-")[1];
  var ano = data.split("-")[2];

  return ano + "-" + mes + "-" + dia;
}

const userDataAnalysis = {
  weight: "",
  height: "",
  genre: "",
  birthdate: "",
  bodytype: "",
  objective: "",
  exercisetime: "",
};

export default function HealthAnalysis({ navigation }) {
  const { signed, user, signOut } = useContext(AuthContext);

  const [genre, setGenre] = React.useState("");
  const [objective, setObjective] = React.useState("");
  const [bodytype, setBodytype] = React.useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [exercisetime, setExerciseTime] = useState("");
  const [meals, setMeals] = useState(5);

  const postHealth = async () => {
    const user = await AsyncStorage.getItem("@RNAuth:user");
    try {
      await api.post("/health", {
        id_user: `${user}`,
        genre: genre,
        height: height,
        weight: weight,
        birthdate: FormatStringDateBrToEua(date),
        bodytype: bodytype,
        objective: objective,
        exercisetime: exercisetime,
        meals: meals,
      });
      navigation.navigate("Home");
      console.foi("Fooi");
    } catch (err) {
      console.foi("Não foi");
      console.log("Ocorreu um erro: ", err);
    }
  };

  const [result, setResult] = useState(userDataAnalysis);
  useEffect(() => {
    async function getHealth() {
      try {
        const user = await AsyncStorage.getItem("@RNAuth:user");
        const result = await api.get(`/health/${user}`);
        setDate(FormatStringDateEuaToBr(result.data.birthdate));
        setGenre(result.data.genre);
        setWeight(result.data.weight);
        setHeight(result.data.height);
        setObjective(result.data.objective);
        setBodytype(result.data.bodytype);
        setExerciseTime(result.data.exercisetime);
      } catch (err) {
        const { status } = err.response;
        if (status === 404) {
          console.log("Parece que você ainda não cadastrou sua ficha de saude");
        }
        if (status === 401) {
          signOut();
        }
      }
    }
    getHealth();
  }, []);

  {
    console.log(meals);
  }
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Title>Ficha de Análise de Saúde</Title>
          <View>
            <Label>Qual é a sua Data de Nascimento?</Label>
            <BirthDate>
              <TextInputMask
                type={"datetime"}
                options={{
                  format: "DD/MM/YYYY",
                }}
                value={date}
                placeholder="DD/MM/AAAA"
                onChangeText={(event) => setDate(event)}
                style={DateInputStyle}
              />

              <Calendar>
                <MaterialCommunityIcons name="calendar-month" color={"#000"} size={30} style={CalendarMonthStyle} />
              </Calendar>
            </BirthDate>
          </View>

          <View>
            <SliderRangeLabel>Qual é o seu Peso? </SliderRangeLabel>
            <SliderRange data={weight} unitType="kg" step={1} maximumValue={300} onChange={(event) => setWeight(event)} />
          </View>

          <View>
            <SliderRangeLabel>Qual é a sua Altura? </SliderRangeLabel>
            <SliderRange data={height} unitType="cm" step={1} maximumValue={300} onChange={(event) => setHeight(event)} />
          </View>

          <View>
            <Label>Quanto tempo de exercicio você pratica por dia?</Label>
            <SliderRange data={exercisetime} unitType="h" step={0.5} maximumValue={24} onChange={(event) => setExerciseTime(event)} />
          </View>

          <View style={Flex}>
            <Label>Qual é o seu Gênero?</Label>
            <RadioButton.Group onValueChange={(event) => setGenre(event)} value={genre} style={RadioButtonGroupStyle}>
              <Radio>
                <RadioButton value="M" color="#fb9300" />
                <ValueRadioButton>Masculino</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="F" color="#fb9300" />
                <ValueRadioButton>Feminino</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          {genre == "M" ? (
            <ImgBodytype>
              <Label>Qual é o seu Biotipo Físico?</Label>
              <Image source={EctomorfoM} />
              <Image source={EndomorfoM} />
              <Image source={MesomorfoM} />
            </ImgBodytype>
          ) : (
            <ImgBodytype>
              <Label>Qual é o seu Biotipo Físico?</Label>
              <Image source={EctomorfoF} />
              <Image source={EndomorfoF} />
              <Image source={MesomorfoF} />
            </ImgBodytype>
          )}

          <View>
            <RadioButton.Group onValueChange={(event) => setBodytype(event)} value={bodytype} style={RadioButtonGroupStyle}>
              <Radio>
                <RadioButton value="ECTOMORPH" color="#fb9300" />
                <ValueRadioButton>1- Ectomorfo</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="ENDOMORPH" color="#fb9300" />
                <ValueRadioButton>2- Endomorfo</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="MESOMORPH" color="#fb9300" />
                <ValueRadioButton>3- Mesomorfo</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          <View>
            <Label>O que você gostaria de fazer com seu peso?</Label>
            <RadioButton.Group onValueChange={(event) => setObjective(event)} value={objective} style={RadioButtonGroupStyle}>
              <Radio>
                <RadioButton value="GAIN" color="#fb9300" />
                <ValueRadioButton>Ganhar</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="LOSE" color="#fb9300" />
                <ValueRadioButton>Perder</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="KEEP" color="#fb9300" />
                <ValueRadioButton>Manter</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          <Button onPress={postHealth}>
            <Text>Cadastrar dados</Text>
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}