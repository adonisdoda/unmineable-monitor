import React, { useState, useContext, useEffect } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { ColorUtils } from '../../../assets/utils/colors';
import SwipeableList from '../../components/swipeable_list';
import { WithdrawContext } from '../../contexts/withdraw_context';
import { UnmineableResponseInterface, unmineable_api } from '../../services/axios';

import { Balance, BalancePerDay, Container, CurrentBalanceSubtitle, Divider, MonitorPrice, SubtitleContainer, Subtitles, SubtitlesValues, WrapperSubtitle } from './styles';

const Monitor: React.FC = () => {

    const [workers, setWorkers] = useState<{ id: string, name: string, active: boolean, hr: number, coin: string }[]>([])
    const [workerPressable, setWorkerPressable] = useState<{ id: string, name: string, active: boolean, hr: number, coin: string }>()

    const { coins, balance, balancePerDay, balanceCurrency } = useContext(WithdrawContext)

    useEffect(() => {

        if (coins.length >= 1) {

            coins.forEach(async coin => {

                if (coin.uuid !== undefined) {

                    const { data: { data } } = await unmineable_api
                        .get<UnmineableResponseInterface<AlgorithmsUnmineableResponse>>(`account/${coin.uuid}/workers`)

                    //TODO: Adicionar outros workers e melhorar esse código
                    if (data.etchash.workers.length > 0) {
                        data.etchash.workers.forEach(element => {
                            setWorkers([...workers,
                            {
                                id: `${coin.uuid}${coin.name}${coin.name}`,
                                name: element.name,
                                active: element.online,
                                hr: element.rhr,
                                coin: coin.name
                            }])
                        })
                    }

                    if (data.randomx.workers.length > 0) {
                        data.randomx.workers.forEach(element => {

                            setWorkers([...workers,
                            {
                                id: `${coin.uuid}${coin.name}${coin.name}`,
                                name: element.name,
                                active: element.online,
                                hr: element.rhr / 1000,
                                coin: coin.name
                            }])
                        })
                    }

                }

            })

        }

    }, [coins])

    console.log(workers)

    return (
        <Container colors={[ColorUtils.secundary_color, ColorUtils.primary_black]}>
            <MonitorPrice>
                <CurrentBalanceSubtitle>CURRENT BALANCE</CurrentBalanceSubtitle>
                <Balance>
                    ~ {
                        Platform.select({
                            ios: balance.toLocaleString('pt-br', { style: 'currency', currency: balanceCurrency }),
                            android: `${balanceCurrency} ${balance}`
                        })
                    }
                </Balance>

                <BalancePerDay>
                    ~ {
                        Platform.select({
                            ios: balancePerDay.toLocaleString('pt-br', { style: 'currency', currency: balanceCurrency }),
                            android: `${balanceCurrency} ${balancePerDay}`
                        })
                    } / day
                </BalancePerDay>
            </MonitorPrice>

            <Divider />

            <View style={{ flex: 1, height: 50, top: 10 }} >
                <SwipeableList
                    data={workers}
                    pressableItem={(id: string) => setWorkerPressable(workers.find(i => i.id === id))}
                />
                <WrapperSubtitle>
                    <SubtitleContainer>
                        <Subtitles>Hashrate</Subtitles>
                        <SubtitlesValues>{workerPressable?.hr}Mh</SubtitlesValues>
                    </SubtitleContainer>

                    <SubtitleContainer>
                        <Subtitles>Coins</Subtitles>
                        <SubtitlesValues>{coins.length}</SubtitlesValues>
                    </SubtitleContainer>
                </WrapperSubtitle>
            </View>

        </Container>
    );
}

export default Monitor;


interface AlgorithmsUnmineableResponse {
    ethash: WorkersUnmineableResponse,
    etchash: WorkersUnmineableResponse,
    randomx: WorkersUnmineableResponse,
    kawpow: WorkersUnmineableResponse
}

interface WorkersUnmineableResponse {
    workers: {
        online: boolean;
        name: string;
        rhr: number;
    }[]
}