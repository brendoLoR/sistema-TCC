import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import fonts from '../../Theme/fonts';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;

  border-bottom-width: 0.7px;
  border-bottom-color: #707070;

  padding: 0 10px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;

  font-family: ${fonts.regular};

  ${props =>
    props.isErrored &&
    css`
      border-bottom-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-bottom-color: #29AAE1;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-bottom-color: #29AAE1;
    `}
`;

// Label

export const ContainerLabel = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TextLabel = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: ${fonts.regular};
`;

// Input

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: ${fonts.regular};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
