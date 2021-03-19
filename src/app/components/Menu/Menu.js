import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import SignUp from '../../pages/SignUp/';
import AboutApp from '../../pages/AboutApp/';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: '#000'}}>Home!</Text>
    </View>
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


const Tab = createMaterialBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
     <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="signup"
        component={SignUpScreen}
        options={{
          tabBarLabel: 'Registrar Usuário',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="about-app"
        component={AboutAppScreen}
        options={{
          tabBarLabel: 'Sobre o aplicativo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}