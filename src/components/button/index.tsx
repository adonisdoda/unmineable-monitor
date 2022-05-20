import React from 'react';
import { View } from 'react-native';
import { Container, Subtitle } from './styles';

// import { Container } from './styles';

export const Button: React.FC<{ mode: 'SM' | 'MD' | 'LG', txt: string, onPress: () => void }> = ({ mode, txt, onPress }) => {
    return (
        ///@ts-ignore: Unreachable code error
        <Container mode={mode} onPress={onPress}>
            {/* @ts-ignore: Unreachable code error */}
            <Subtitle mode={mode}>
                {txt}
            </Subtitle>
        </Container>
    );
}
