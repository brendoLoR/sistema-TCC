import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../Pages/Login'
import Home from '../Pages/Home'

const Route = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Route.Navigator
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
      initialRouteName="Login"
    >
      <Route.Screen name="Login" component={Login} />
      <Route.Screen name="Home"
        component={Home}
        options={{
          gestureEnabled: true,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
        }}
      />
    </Route.Navigator >
  );
}

export default Routes;
