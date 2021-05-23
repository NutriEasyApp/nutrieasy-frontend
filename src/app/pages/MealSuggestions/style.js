import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #8ac908;
  padding: 10px;
`;

export const Wrapper = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  font-weight: 200;
  margin-bottom: 30px;
  color: white;
  align-self: center;
`;

export const Value = styled.Text`
  font-size: 15px;
  line-height: 22px;
  font-weight: 200;
  margin-bottom: 5px;
  color: gray;
`;

export const TitlePage = styled.Text`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

export const Portion = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: black;
`;

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: '#8ac908',
  paddingTop: StatusBar.currentHeight,
  paddingRight: 10,
  paddingLeft: 10,
};

export const Recipes = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SectionImg = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionInfo = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ColumnInfo = styled.View`
  width: 50%;
  margin-bottom: 10px;
`;
