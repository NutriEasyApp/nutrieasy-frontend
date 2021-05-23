import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import {
  Container,
  Content,
  Info,
  TitleMain,
  Icon,
  InfoText,
  Wrapper,
  Value,
  TitleElement,
  TextMain,
  SafeAreaViewStyle
} from './style';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RecipesIndex() {
  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitleMain>Divisão de Refeições</TitleMain>
          <TextMain>O objetivo dessa divisão é fornecer números adequados dos nutrientes para cada montante de refeição, seja ela durante o dia ou um total por refeições.</TextMain>
          
          <Wrapper> 
            <Icon>
              <MaterialCommunityIcons
                name="calendar-today"
                color={'#90cc0c'}
                size={65}
              />
            </Icon>

            <TitleElement>Montante Nutricional por dia:</TitleElement>
            
            <Content>
              <View>
                <Info>
                  <InfoText>
                    Água: <Value>5L</Value>
                  </InfoText>
                  <InfoText>
                    Proteína: <Value>1500g</Value>
                  </InfoText>
                  <InfoText>
                    Caboidratos: <Value>1500g</Value>
                  </InfoText>
                  <InfoText>
                    Lípidios: <Value>1500g</Value>
                  </InfoText>
                  <InfoText>
                    Gorduras: <Value>1500g</Value>
                  </InfoText>
                </Info>
              </View>
            </Content>
          </Wrapper>

          <Wrapper style={{ marginTop: 40 }}>
            <Icon>
              <MaterialCommunityIcons
                name="noodles"
                color={'#90cc0c'}
                size={65}
              />
            </Icon>
            <TitleElement>Montante Nutricional por refeições:</TitleElement>
            <Content>
              <View>
                <Info>
                  <InfoText>
                    Água: <Value>2L</Value>
                  </InfoText>
                  <InfoText>
                    Proteína: <Value>500g</Value>
                  </InfoText>
                  <InfoText>
                    Caboidratos: <Value>500g</Value>
                  </InfoText>
                  <InfoText>
                    Lípidios: <Value>500g</Value>
                  </InfoText>
                  <InfoText>
                    Gorduras: <Value>500g</Value>
                  </InfoText>
                </Info>
              </View>
            </Content>
          </Wrapper>

        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
