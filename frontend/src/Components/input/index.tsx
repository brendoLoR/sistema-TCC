import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps, Text } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, ContainerLabel, TextLabel } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  startIcon?: string;
  endIcon?: string;
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, label, startIcon, endIcon, placeholder, isPassword, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const [eyeLooking, setEyeLooking] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleShowPassword = (): void => {
    if (!eyeLooking) {
      setEyeLooking(true);
    } else {
      setEyeLooking(false);
    }
  };

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <ContainerLabel>
        <TextLabel>{label}</TextLabel>
      </ContainerLabel>}
      <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {startIcon &&
          <Icon
            name={startIcon}
            size={20}
            color='#000'
          />
        }
        <TextInput
          style={{ color: '#000' }}
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholder={placeholder && placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={isPassword && eyeLooking}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        {isPassword &&
          <Icon
            onPress={handleShowPassword}
            name={eyeLooking ? 'eye' : 'eye-off'}
            size={20}
            color='#000'
          />
        }
      </Container>
    </>
  );
};

export default forwardRef(Input);
