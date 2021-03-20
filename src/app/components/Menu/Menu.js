import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SignUp from '../../pages/SignUp/';
import AboutApp from '../../pages/AboutApp/';
import Home from '../../pages/Home';

const MyTheme = {
  colors: {
    primary: "#90cc0c",
  },
};


function HomeScreen() {
  return (
    <Home />
  );
}

function SignUpScreen() {
  return (
    <SignUp />
  );
}

function AboutAppScreen() {
  return (
    <AboutApp />
  );
}

function MoreScreen() {
  return (
    <Text>Mais informações</Text>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#fff"
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#fff',
          labelStyle: {
            color: "#fff",
          }
        }}
      >

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#fff'} size={20} />
            ),
          }}

        />

        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            tabBarLabel: 'Registrar Usuário',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-plus" color={'#fff'} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={AboutAppScreen}
          options={{
            tabBarLabel: 'Sobre o aplicativo',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information-variant" color={'#fff'} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: 'Mais',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dots-horizontal" color={'#fff'} size={20} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}