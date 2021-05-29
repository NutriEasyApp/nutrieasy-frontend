import React, { useState, useContext } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AuthContext from '../contexts/auth';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes(){
  const { routeName } = useContext(AuthContext);
  
  return(
    <AuthStack.Navigator
    initialRouteName={routeName}
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
  );
}
