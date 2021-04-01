//Rotas com o usuario logado
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from '../pages/Dashboard';
import HealthAnalysis from '../pages/HealthAnalysis';

const AppStack = createStackNavigator();

const AppRoutes = () => {
    return(
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Dashboard" component={Dashboard} />
            <AppStack.Screen name="HealthAnalysis" component={HealthAnalysis} />
        </AppStack.Navigator>
    );
} 

export default AppRoutes;