import React from "react";
import Dashboard from "../pages/Dashboard";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
