import React from 'react';
import { Text, View } from 'react-native';
import { Container, ContainerOption, Options } from './styles'
import fonts from '../../theme/fonts'
import { FlatList } from 'react-native-gesture-handler';

import Terms from '../../Assets/icones/terms.svg'
import Boleto from '../../Assets/icones/Boleto.svg'
import Profile from '../../Assets/icones/PersonBadge.svg'
import Warn from '../../Assets/icones/warn.svg'

const Data = [
  {
    id: Math.random(),
    title: 'Contrato',
    icon: ''
  },
  {
    id: Math.random(),
    title: 'Boletos',
    icon: ''
  },
  {
    id: Math.random(),
    title: 'Perfil',
    icon: ''
  },
  {
    id: Math.random(),
    title: 'Avisos',
    icon: ''
  },
]

const Home: React.FC = () => {

  function renderIcon(name: string): JSX.Element {
    if (name === 'Contrato') return <Terms />
    if (name === 'Boletos') return <Boleto />
    if (name === 'Perfil') return <Profile />
    if (name === 'Avisos') return <Warn />
    return <> </>
  }

  return (
    <Container>
      <Text style={{ fontFamily: fonts.regular, fontSize: 18 }}>Olá, Victor</Text>
      <ContainerOption>
        <FlatList
          data={Data}
          numColumns={2}
          style={{ paddingHorizontal: 48, marginTop: 40 }}
          ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
          renderItem={({ item }) =>
          (
            <Options>
              {renderIcon(item.title)}
              <Text style={{ fontFamily: fonts.regular, fontSize: 14, color: '#f5f5f5' }}>{item.title}</Text>
            </Options>
          )
          }
        />
      </ContainerOption>
    </Container >
  )
}

export default Home;
