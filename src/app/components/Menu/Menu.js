import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SignUp from '../../pages/SignUp/';
import Home from '../../pages/Home';
import FormHealthAnalysis from '../../pages/FormHealthAnalysis';
import AboutApp from '../../pages/AboutApp/';
import DietProposal from '../../pages/DietProposal';

const MyTheme = {
  colors: {
    primary: '#90cc0c',
  },
};

function HomeScreen() {
  return <Home />;
}

function SignUpScreen() {
  return <SignUp />;
}

function FormHealthAnalysisScreen() {
  return <FormHealthAnalysis />;
}

function DietProposalScreen() {
  return <DietProposal />;
}

function MoreScreen() {
  return <Text>Mais informações</Text>;
}

function AboutAppScreen() {
  return <AboutApp />;
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
            color: '#fff',
          },
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
          name="Ficha de Análise de Saúde"
          component={FormHealthAnalysisScreen}
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


        {/*<Tab.Screen*/}
        {/*  name="SignUp"*/}
        {/*  component={SignUpScreen}*/}
        {/*  options={{*/}
        {/*    tabBarLabel: 'Registrar Usuário',*/}
        {/*    tabBarIcon: ({ color, size }) => (*/}
        {/*      <MaterialCommunityIcons name="account-plus" color={'#fff'} size={20} />*/}
        {/*    ),*/}
        {/*  }}*/}
        {/*/>*/}


        {/*<Tab.Screen
          name="Gráfico de Evolução"
          component={FormHealthAnalysisScreen}
          options={{
            tabBarLabel: 'Gráfico de Evolução',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-areaspline"
                color={'#fff'}
                size={20}
              />
            ),
          }}
        />*/}


        {/*<Tab.Screen*/}
        {/*    name="Proposta de Dieta"*/}
        {/*    component={DietProposalScreen}*/}
        {/*    options={{*/}
        {/*      tabBarLabel: 'Proposta de Dieta',*/}
        {/*      tabBarIcon: ({ color, size }) => (*/}
        {/*        <MaterialCommunityIcons name="receipt" color={'#fff'} size={20} />*/}
        {/*      ),*/}
        {/*    }}*/}
        {/*  />*/}


        {/*<Tab.Screen
          name="About"
          component={AboutAppScreen}
          options={{
            tabBarLabel: 'Sobre o aplicativo',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information-variant" color={'#fff'} size={20} />
            ),
          }}
        />*/}


        {/*<Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: 'Mais',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dots-horizontal" color={'#fff'} size={20} />
            ),
          }}
        />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
