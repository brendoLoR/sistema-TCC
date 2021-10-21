import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native';
import Toast from '../frontend/src/Components/Toast'
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ToastProvider
        animationType="zoom-in"
        renderType={{
          customSuccess: ({ data, id }) => (
            <Toast
              id={id}
              message={data.message}
              title={data.title}
              type={data.type}
            />
          )
        }}
      >
        <Routes />
      </ToastProvider>
    </NavigationContainer>
  );
}

export default App;
