import React from 'react';
import { View } from 'react-native';
import { Container, Subtitle } from './styles';

// import { Container } from './styles';

export const Button: React.FC<{ mode: 'SM' | 'MD' | 'LG', txt: string, onPress: () => void }> = ({ mode, txt, onPress }) => {
    return (
        <Container mode={mode} onPress={onPress}>
            <Subtitle mode={mode}>
                {txt}
            </Subtitle>
        </Container>
    );
}
