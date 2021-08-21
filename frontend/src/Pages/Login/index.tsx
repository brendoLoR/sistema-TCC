import React, { useCallback, useRef, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import fonts from '../../theme/fonts';
import Logo from '../../Assets/Logo.png'

interface LoginProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(
    async (obj: any) => {
      setLoadingLogin(true)
      setTimeout(() => {
        setLoadingLogin(false)
        navigate('Home');
      }, 2000)
    },
    [],
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -80}
    >
      <Image source={Logo} style={{ width: 200, height: 200, alignSelf: 'center' }} />
      <Form
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 35
        }}
        ref={formRef}
        onSubmit={handleLogin}
      >
        <Input
          name="email"
          leftIcon={{ type: 'Feather', name: 'mail' }}
          placeholder="email@endereco.com"
          label="E-mail"
          labelStyle={{ fontFamily: fonts.light, fontSize: 14, color: '#111' }}
        />
        <Input
          name="password"
          leftIcon={{ type: 'Feather', name: 'lock' }}
          placeholder="senha"
          label="Senha"
          secureTextEntry
          labelStyle={{ fontFamily: fonts.light, fontSize: 14, color: '#111' }}
        />
        <Button
          title="Entrar"
          titleStyle={{ fontFamily: fonts.regular, fontSize: 18 }}
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 50,
            borderRadius: 10
          }}
          buttonStyle={{
            width: '100%',
            height: 50,
            borderRadius: 10
          }}
          loading={loadingLogin}
          onPress={() => formRef.current.submitForm()}
        />
      </Form>
    </KeyboardAvoidingView>
  )
}

export default Login
