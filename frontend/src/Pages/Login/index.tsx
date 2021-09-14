import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Animated, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements'
import normalize from 'react-native-normalize'
import { useToast } from "react-native-toast-notifications";

import { ButtonSignUp, Container, Text } from './styles'

import fonts from '../../Theme/fonts';
import Logo from '../../assets/Logo.png';

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const Toast = useToast();

  const [translatedLogo] = useState(new Animated.Value(normalize(220, 'height')))
  const [scale] = useState(new Animated.Value(0))

  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(
    async () => {
      setLoadingLogin(true)
      setTimeout(() => {
        setLoadingLogin(false)
        navigate('Home');
      }, 100)
      Toast.show('',
        {
          id: String(Math.random()),
          placement: 'top',
          type: 'customSuccess',
          data: {
            title: 'Olá',
            message: 'MundoMundoMundoMundoMundoMundoMundoMundoMundoMundoMundo',
            type: 'success'
          }
        }
      )
    },
    [],
  );

  useEffect(() => {
    Animated.timing(translatedLogo, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior="position"
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? normalize(40, 'height') : normalize(-30, 'height')}
    >
      <Animated.Image
        source={Logo}
        style={{
          width: 230,
          height: 230,
          alignSelf: 'center',
          transform: [{ translateY: translatedLogo }]
        }}
      />
      <Animated.View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 35,
          transform: [{ scale }]
        }}
      >
        <Input
          leftIcon={{ type: 'Feather', name: 'mail' }}
          placeholder="email@endereco.com"
          label="E-mail"
          labelStyle={{ fontFamily: fonts.light, fontSize: 14, color: '#111' }}
        />
        <Input
          leftIcon={{ type: 'Feather', name: 'lock', color: '#111' }}
          labelStyle={{ fontFamily: fonts.light, fontSize: 14, color: '#111' }}
          containerStyle={{ borderColor: 'red' }}
          placeholder="senha"
          label="Senha"
          secureTextEntry
          errorMessage=""
        />
        <Button
          title="Entrar"
          titleStyle={{ fontFamily: fonts.regular, fontSize: 18 }}
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 50,
            borderRadius: 10,
            marginBottom: 45,
          }}
          buttonStyle={{
            width: '100%',
            height: 50,
            borderRadius: 10,
          }}
          loading={loadingLogin}
          onPress={handleLogin}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text>Você ainda não possui cadastro?</Text>
          <ButtonSignUp>
            <Text color="#52BE80">Cadastre-se</Text>
          </ButtonSignUp>
        </View>
        <ButtonSignUp style={{ marginTop: 30 }}>
          <Text color="#52BE80">Esqueci minha senha</Text>
        </ButtonSignUp>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

export default Login
