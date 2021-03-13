import * as React from 'react';

/* Menu Navigation */
import 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';


function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function MeuPerfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meu Perfil</Text>
    </View>
  );
}

function Acompanhamento() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Acompanhamento</Text>
    </View>
  );
}

function Receitas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Receitas</Text>
    </View>
  );
}


function Alimentos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alimentos</Text>
    </View>
  );
}

function ImprimirRelatorios() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Imprimir Relatorios</Text>
    </View>
  );
}


function Graficos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gráficos</Text>
    </View>
  );
}


function Dieta() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dieta</Text>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar menu"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Meu Perfil" component={MeuPerfil} />
      <Drawer.Screen name="Acompanhamento" component={Acompanhamento} />
      <Drawer.Screen name="Receitas" component={Receitas} />
      <Drawer.Screen name="Alimentos" component={Alimentos} />
      <Drawer.Screen name="Imprimir Relatórios" component={ImprimirRelatorios} />
      <Drawer.Screen name="Gráficos" component={Graficos} />
      <Drawer.Screen name="Dieta" component={Dieta} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -250
  },
  logoImg: {
    width: 180,
    height: 180
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#90cc0c',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  registerText: {
    color: '#3b3b3b',
  }
});