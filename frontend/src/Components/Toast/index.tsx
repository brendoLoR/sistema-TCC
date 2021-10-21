import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Message, Title, Icon } from './styles'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useToast } from 'react-native-toast-notifications';

interface ToastProps {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warn' | 'error'
}

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  type,
}) => {
  const Toast = useToast();


  return (
    <Container type={type}>
      <View style={{ flex: 7 }}>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </View>
      <Icon
        onPress={() => Toast.hideAll()}
      >
        <FeatherIcon name='x' size={25} color="#f5f5f5" style={{ alignSelf: 'center' }} />
      </Icon>
    </Container>
  )
}

export default Toast;
