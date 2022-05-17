import React, { useState } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { ColorUtils } from '../../../assets/utils/colors';
import SwipeableList from '../../components/swipeable_list';

import { Balance, Container, CurrentBalanceSubtitle, Divider, MonitorPrice } from './styles';

const Monitor: React.FC = () => {

    const [balance, setBalance] = useState<number>(150.00)


    return (
        <Container colors={[ColorUtils.secundary_color, ColorUtils.primary_black]}>
            <MonitorPrice>
                <CurrentBalanceSubtitle>CURRENT BALANCE</CurrentBalanceSubtitle>
                <Balance>
                    {
                        Platform.select({
                            ios: balance.toLocaleString('pt-br', { style: 'currency', currency: 'USD' }),
                            android: `US$ ${balance}`
                        })
                    }
                </Balance>
            </MonitorPrice>

            <Divider />

            <View style={{ flex: 1, height: 50, top: 10 }} >
                <SwipeableList data={[{ id: '1', name: 'worker-pc', active: true }, { id: '2', name: 'worker-miner-macos', active: false }]} />
            </View>

        </Container>
    );
}

export default Monitor;