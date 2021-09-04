import styled from 'styled-components/native'
import fonts from '../../Theme/fonts'

interface TextProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
`
export const Text = styled.Text<TextProps>`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${props => props.color ? props.color : '#111'};
`

export const ButtonSignUp = styled.TouchableHighlight`
  margin: 0px 5px 0px;
`
