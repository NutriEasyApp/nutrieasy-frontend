import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 5px 15px;
  margin: 0 20px;
`;

export const Divisor = styled.View``;

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

export const ViewMain = styled.View`
  display: flex;
  justify-content: center;
  padding: 60px 30px;
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

export const Frame = styled.View`
  margin-top: 20px;
  border: 1px solid gray;
  padding: 5px 20px;
`;
