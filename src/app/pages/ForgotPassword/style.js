import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #90cc0c;
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  color: white;
`;

export const Text = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  font-weight: 200;
  margin-bottom: 30px;
  color: #3b3b3b;
  align-self: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput.attrs({
  autoCorrect: false,
})`
  background-color: #f9f9f9;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 16px;
  border-radius: 7px;
  padding: 15px;
  height: 55px;
`;

export const Back = styled.View`
  padding: 10px 0;
  align-self: stretch;
  margin-left: 30px;
`;

export const TextInputError = styled.TextInput.attrs({
  autoCorrect: false,
})`
  background-color: #f9f9f9;
  border: 1px solid #f02849;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 16px;
  border-radius: 7px;
  padding: 15px;
  height: 55px;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  padding: 15px;
  align-self: flex-end;
`;

export const SectionInput = styled.View`
  width: 100%;
  align-items: center;
`;
