import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logo from '../../../assets/images/logo.png';

import {
    Container, Top, Logo, Title, Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Description,
    Annotation,
} from './Home.style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { statement } from '@babel/template';

export default function Home() {
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChanged(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }
    return (
        <Container>
            <Top style={{textAlign: 'center', justifyContent: "center", alignItems: "center"}}>
                <Title style={{color: '#fff', fontSize: 23}}>NutriEasy App</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={25} color="#fff" style={{textAlign: 'center', justifyContent: "center", alignItems: "center", marginBottom: 20}}/>
            <Content>
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChanged}>
                    <Card
                        style={{
                            transform: [
                                {
                                    translateY: translateY.interpolate({
                                        inputRange: [-300, 0, 380],
                                        outputRange: [-50, 0, 380],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        }}>
                        <CardHeader>
                            <MaterialCommunityIcons name="nutrition" size={28} color="#666" />
                            <MaterialCommunityIcons name="chart-bar" size={28} color="#666" />
                        </CardHeader>

                        <CardContent>
                            <Title>Lorem ipsum dolor</Title>
                            <Description>Lorem ipsum dolor</Description>
                        </CardContent>

                        <CardFooter>
                            <Annotation>Lorem ipsum dolor sit amet, consectetur adipiscing.</Annotation>
                        </CardFooter>

                    </Card>
                </PanGestureHandler>
            </Content>
        </Container>
    );
}