import React from 'react';
import { Text, View } from 'react-native';
import {
  Divisor,
  Content,
  Info,
  TitleMain,
  ViewMain,
  Icon,
  InfoText,
  Frame,
  Value,
} from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RecipesIndex() {
  return (
    <ViewMain>
      <Divisor>
        <Frame>
          <Icon>
            <MaterialCommunityIcons
              name="calendar-today"
              color={'#90cc0c'}
              size={65}
            />
          </Icon>
          <TitleMain>Montante Nutricional por dia:</TitleMain>
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
        </Frame>
        <Frame style={{ marginTop: 40 }}>
          <Icon>
            <MaterialCommunityIcons
              name="noodles"
              color={'#90cc0c'}
              size={65}
            />
          </Icon>
          <TitleMain>Montante Nutricional por refeições:</TitleMain>
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
        </Frame>
      </Divisor>
    </ViewMain>
  );
}
