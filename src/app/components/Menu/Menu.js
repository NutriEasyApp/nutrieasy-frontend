import * as React from 'react';

import { styles } from './Menu.style';

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