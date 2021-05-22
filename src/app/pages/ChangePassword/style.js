import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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

export const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  font-weight: 200;
  width: 100%;
  margin-bottom: 30px;
  color: gray;
`;

export const Back = styled.View`
  padding: 10px 0;
  align-self: stretch;
  margin-left: 30px;
`;
