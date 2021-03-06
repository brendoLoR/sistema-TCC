import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../Pages/Login'
import Home from '../Pages/Client/Home'

const Route = createStackNavigator();

const Routes: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

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
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Route.Navigator >
  );
}

export default Routes;
