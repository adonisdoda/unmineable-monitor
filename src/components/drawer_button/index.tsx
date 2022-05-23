import React from 'react';
import { Container } from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { ColorUtils } from '../../../assets/utils/colors';

const DrawerButton: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
            <Feather name='settings' size={18} color={ColorUtils.primary_whyte} />
        </Container>
    );
}

export { DrawerButton }