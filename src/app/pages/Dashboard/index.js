import React, { useContext, createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../../pages/Home';
import HealthAnalysis from '../../pages/HealthAnalysis';

import AuthContext from '../../contexts/auth';

const MyTheme = {
  colors: {
    primary: '#90cc0c',
  },
};

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  const { signed, user, signOut } = useContext(AuthContext);

  function handleSignout() {
    signOut();
  }

  {
    /*
    <Text>Olá{user.name}!</Text>
    <Button onPress={handleSignout} title="Sign Out" />
    */
  }

  return (
    <NavigationContainer theme={MyTheme} independent={true} ref={createRef()}>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#fff"
        initialRouteName="Dashboard"
        tabBarOptions={{
          activeTintColor: '#fff',
          labelStyle: {
            color: '#fff',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#fff'} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Ficha de Análise de Saúde"
          component={HealthAnalysis}
          options={{
            tabBarLabel: 'Análise de Saúde',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="hospital-box"
                color={'#fff'}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
