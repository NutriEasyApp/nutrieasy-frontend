import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Logo = styled.View`
  justify-content: center;
  margin-bottom: -20px;
  margin-top: 0;
`;

export const Image = styled.Image`
  width: 220px;
  height: 220px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-bottom: 50px;
  margin-top: 0;
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

export const TextInputError = styled.TextInput.attrs({
  autoCorrect: false,
})`
  background-color: #fef1f2;
  border: 1px solid #dc3545;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 16px;
  border-radius: 7px;
  padding: 15px;
  height: 55px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #90cc0c;
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const TextSubmit = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const TextError = styled.Text`
  color: #dc3545;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const TextRegister = styled.Text`
  color: #3b3b3b;
`;

export const TextForgotPassword = styled.Text`
  color: #222;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
`;
