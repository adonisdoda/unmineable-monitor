import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '../../components/switch';
import { ColorUtils } from '../../../assets/utils/colors';
import { Container } from './styles';


const OPTIONS = [
    { label: "All", value: "all" },
    { label: "My Cryptocurrencies", value: "cryptocurrencies" }
]

export const Coins: React.FC = () => {

    const [optionSelected, setOptionSelected] = useState('')

    return (
        <Container colors={[ColorUtils.secundary_color, ColorUtils.primary_black]}>
            <Switch options={OPTIONS} onChanged={(e: string) => setOptionSelected(e)} />
        </Container>
    );
}
