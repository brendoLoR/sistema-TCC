import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Animated, View } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import Input from '../../Components/input'
import * as Yup from 'yup';
import normalize from 'react-native-normalize'
import { useToast } from "react-native-toast-notifications";

import { ButtonSignUp, Text } from './styles'

import fonts from '../../Theme/fonts';
import Logo from '../../assets/Logo.png';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native-gesture-handler';
import getValidationErrors from '../../utils/getValidationErrors';
import c from 'react-native-toast-notifications';
import Toast from 'react-native-toast-notifications/lib/typescript/toast';

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const Toast = useToast();

  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);

  const [translatedLogo] = useState(new Animated.Value(normalize(220, 'height')))
  const [scale] = useState(new Animated.Value(0))

  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(
    async (data: object) => {
      try {
        setLoadingLogin(true)

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Por favor, digite um e-mail válido'),
          password: Yup.string().min(8, 'sua senha precisa ter no mínimo 8 dígitos').required('Senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setTimeout(() => {
          setLoadingLogin(false)
          navigate('Home');
        }, 1000)


      } catch (err) {
        setLoadingLogin(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);


          if (errors.email && errors.password) {
            Toast.show('',
              {
                placement: 'top',
                type: 'customSuccess',
                data: {
                  title: 'Ops!',
                  message: 'Os campos estão vazios',
                  type: 'error'
                }
              }
            )
            formRef.current?.setErrors(errors)
            return;
          }

          if (errors.email) {
            Toast.show('',
              {
                placement: 'top',
                type: 'customSuccess',
                data: {
                  title: 'Ops!',
                  message: errors.email,
                  type: 'error'
                }
              }
            )
            formRef.current?.setFieldError('email', errors.email)
            return;
          }
          if (errors.password) {
            Toast.show('',
              {
                placement: 'top',
                type: 'customSuccess',
                data: {
                  title: 'Ops!',
                  message: errors.password,
                  type: 'error'
                }
              }
            )
            formRef.current?.setFieldError('password', errors.password)
            return;
          }
        }
      }
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
      keyboardVerticalOffset={normalize(-40, 'height')}
      enabled
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
        <Form
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
          }}
          ref={formRef}
          onSubmit={handleLogin}
        >
          <Input name="email" label="E-mail" placeholder="endereco@email.com" startIcon="mail" />
          <Input name="password" label="Senha" placeholder="senha" isPassword startIcon="lock" />
        </Form>
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
          onPress={() => formRef.current?.submitForm()}
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
