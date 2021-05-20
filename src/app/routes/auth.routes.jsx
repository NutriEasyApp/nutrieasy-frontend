import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
