import React from 'react';
import { View } from 'react-native';
import { ColorUtils } from '../../../assets/utils/colors';

import { Container } from './styles';

export const Coins: React.FC = () => {
    return (
        <Container colors={[ColorUtils.secundary_color, ColorUtils.primary_black]}>

        </Container>
    );
}