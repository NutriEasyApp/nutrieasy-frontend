import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeNutriEasy, TabBarStyle } from './style';

import Home from '../Home';
import HealthAnalysis from '../HealthAnalysis';
import Graphics from '../Graphics';
import Reports from '../Reports';
import Recipes from '../Recipes';
import ChangePassword from '../ChangePassword';
import TermsOfUse from '../TermsOfUse';
import AboutApp from '../AboutApp';
import MealSuggestions from '../MealSuggestions';

import AuthContext from '../../contexts/auth';

const Tab = createMaterialBottomTabNavigator();
const MenuStack = createStackNavigator();

export default function Dashboard() {
  const { signed, user, signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <NavigationContainer theme={ThemeNutriEasy} independent={true}>
      <Tab.Navigator
        activeColor="#fff"
        inactiveColor="#fff"
        initialRouteName="Dashboard"
        tabBarOptions={TabBarStyle}
      >
        <Tab.Screen
          name="First"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#fff'} size={20} />
            ),
          }}
        >
          {() => (
            <MenuStack.Navigator screenOptions={{ headerShown: false }}>
              <MenuStack.Screen name="Home" component={Home} />
              <MenuStack.Screen
                name="ChangePassword"
                component={ChangePassword}
              />
              <MenuStack.Screen name="AboutApp" component={AboutApp} />
              <MenuStack.Screen name="TermsOfUse" component={TermsOfUse} />
            </MenuStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Ficha de Análise de Saúde"
          component={HealthAnalysis}
          options={{
            tabBarLabel: 'Saúde',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="hospital-box"
                color={'#fff'}
                size={20}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Sistema de Divisões de Refeições"
          component={Recipes}
          options={{
            tabBarLabel: 'Refeições',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="noodles" color={'#fff'} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Gráficos"
          component={Graphics}
          options={{
            tabBarLabel: 'Gráficos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={'#fff'}
                size={20}
              />
            ),
          }}
        />

        {/*<Tab.Screen
          name="Impressão de Relatórios"
          component={Reports}
          options={{
            tabBarLabel: "Relatórios",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="text-box-check" color={"#fff"} size={20} />
            ),
          }}
        />*/}

        <Tab.Screen
          name="Sugestões de Refeições"
          component={MealSuggestions}
          options={{
            tabBarLabel: 'Sugestões',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="food-apple"
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
