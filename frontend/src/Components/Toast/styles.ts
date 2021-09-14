import styled from "styled-components/native";
import fonts from "../../Theme/fonts";

interface ContainerProps {
  type: 'success' | 'warn' | 'error'
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 5px 20px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  background-color: ${props =>
    props.type === 'success' ? '#00C851' :
      props.type === 'error' ? '#ff4444' : '#ffbb33'
  };
    `

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 18px;
  font-family: ${fonts.regular};
  font-weight: bold;
`
export const Message = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  font-family: ${fonts.regular};
`

export const Icon = styled.TouchableOpacity`
  flex: 1;
  margin-left: 15px;
  align-self: center;
`
