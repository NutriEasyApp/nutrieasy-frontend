import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ChangePassword({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Alterar Senhar</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
