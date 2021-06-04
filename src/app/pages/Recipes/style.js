import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Button = styled.TouchableOpacity`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 5px 15px;
  margin: 0 20px;
`;

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 25px 30px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const TitleMain = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
`;

export const TextMain = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  font-weight: 200;
  width: 100%;
  margin-bottom: 10px;
  color: gray;
`;

export const TitleElement = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
`;

export const Value = styled.Text`
  margin-top: 5px;
  color: black;
  font-weight: bold;
`;

export const Message = styled.Text`
  color: #f02849;
  font-weight: bold;
  text-align: center;
`;

export const WrapperError = styled.View`
  margin-top: 20px;
  padding: 5px 30px 25px 30px;
  background-color: whitesmoke;
  border-radius: 20px;
  border: 1px solid #f02849;
`;

export const Icon = styled.View`
  text-align: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoText = styled.Text`
  font-size: 20px;
`;

export const Wrapper = styled.View`
  margin-top: 20px;
  padding: 5px 20px;
  background-color: whitesmoke;
  border-radius: 20px;
`;

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: "white",
  paddingTop: StatusBar.currentHeight,
};