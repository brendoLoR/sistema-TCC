import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fonts from '../../../Theme/fonts'
import { Container, ContainerOption, Options } from './styles'

import Terms from '../../../assets/icones/terms.svg'
import Boleto from '../../../assets/icones/Boleto.svg'
import Profile from '../../../assets/icones/PersonBadge.svg'
import Warn from '../../../assets/icones/warn.svg'

const Data = [
  {
    id: Math.random(),
    title: 'Contrato',
    navigate: ''
  },
  {
    id: Math.random(),
    title: 'Boletos',
    navigate: ''
  },
  {
    id: Math.random(),
    title: 'Perfil',
    navigate: ''
  },
  {
    id: Math.random(),
    title: 'Avisos',
    navigate: ''
  },
]

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function renderIcon(name: string): JSX.Element {
    if (name === 'Contrato') return <Terms />
    if (name === 'Boletos') return <Boleto />
    if (name === 'Perfil') return <Profile />
    if (name === 'Avisos') return <Warn />
    return <> </>
  }

  return (
    <Container>
      <Text style={{ fontFamily: fonts.regular, fontSize: 18, color: '#111' }}>Olá, Victor</Text>
      <ContainerOption>
        <FlatList
          data={Data}
          numColumns={2}
          style={{ paddingHorizontal: 48, marginTop: 40 }}
          ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
          renderItem={({ item }) => (
            <Options activeOpacity={1} onPress={() => navigate(item.title)}>
              {renderIcon(item.title)}
              <Text style={{ fontFamily: fonts.regular, fontSize: 14, color: '#f5f5f5' }}>{item.title}</Text>
            </Options>
          )}
        />
      </ContainerOption>
    </Container >
  )
}

export default Home;
