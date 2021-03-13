/*
function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={styles.logoImg} source={require('./assets/images/logo.png')}></Image>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>
            Acessar
      </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>
            Criar Conta
      </Text>
        </TouchableOpacity>
        <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      </View>
    </KeyboardAvoidingView>
  );
}
*/