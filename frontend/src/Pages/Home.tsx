import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Animated, Easing } from 'react-native';

import ReactLogo from '../Assets/reactLogo.png'

const Home: React.FC = () => {

    const [anime] = useState(new Animated.Value(0));

    function animated(): void {
        Animated.timing(anime, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            anime.setValue(0)
            animated()
        })

    }

    useEffect(() => {
        animated()
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Animated.View
                style={{
                    transform: [{
                        rotate: anime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '360deg'
                            ]
                        })
                    }]
                }}
            >
                <ImageBackground source={ReactLogo} style={{ width: 250, height: 250 }} />
            </Animated.View>
            <Text
                style={{
                    color: '#00DBFC',
                    fontSize: 35,
                    fontWeight: 'bold'
                }}
            >
                Reactty
            </Text>
        </View>
    )
}

export default Home;