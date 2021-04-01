//Rotas que o usuario ira poder navegar, enquanto ele nao estiver autenticado na aplicação
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    );
} 

export default AuthRoutes;