import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

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
            initialRouteName="Home"
        >
            <Route.Screen name="Home" component={Home} />
        </Route.Navigator >
    );
}

export default Routes;