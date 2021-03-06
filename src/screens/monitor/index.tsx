import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { Platform, View } from 'react-native';
import { ColorUtils } from '../../../assets/utils/colors';
import { Button } from '../../components/button';
import SwipeableList from '../../components/swipeable_list';
import { WithdrawContext } from '../../contexts/withdraw_context';
import { UnmineableResponseInterface, unmineable_api } from '../../services/axios';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Balance, BalancePerDay, ContainerDisabled, DisabledWorkers, DisableWorkersSubtitles, Container, CurrentBalanceSubtitle, Divider, MonitorPrice, SubtitleContainer, Subtitles, SubtitlesValues, WrapperSubtitle
} from './styles';
import { StackNavigatorType } from '../../settings/navigations/stack';
import { DrawerButton } from '../../components/drawer_button';

const Monitor: React.FC = () => {

    const [workers, setWorkers] = useState<{ id: string, name: string, active: boolean, hr: number, coin: string }[]>([])
    const [workerPressable, setWorkerPressable] = useState<{ id: string, name: string, active: boolean, hr: number, coin: string }>()

    const navigation = useNavigation<StackNavigationProp<StackNavigatorType>>();
    const { coins, balance, balancePerDay, balanceCurrency } = useContext(WithdrawContext)

    useLayoutEffect(() => {
        navigation.setOptions({ headerLeft: () => <DrawerButton /> })
    }, [])

    useEffect(() => {

        if (coins.length > 0) {

            coins.forEach(async coin => {

                if (coin.uuid) {

                    const { data: { data } } = await unmineable_api
                        .get<UnmineableResponseInterface<AlgorithmsUnmineableResponse>>(`account/${coin.uuid}/workers`)


                    for (const strategy in data) {
                        data[strategy as keyof AlgorithmsUnmineableResponse].workers.forEach(element => {
                            setWorkers([...workers,
                            {
                                id: `${coin.uuid}${coin.name}${element.name}`,
                                name: element.name,
                                active: element.online,
                                hr: element.rhr,
                                coin: coin.name
                            }])
                        })
                    }
                }

            })

        }

    }, [coins])


    const WorkerInfoComponent: React.FC = () => {

        if (workers.length <= 0) {
            return (
                <ContainerDisabled>
                    <DisabledWorkers />
                    <DisableWorkersSubtitles>NO ACTIVE WORKERS</DisableWorkersSubtitles>
                </ContainerDisabled>
            )
        }


        return (
            <>
                <SwipeableList
                    data={workers}
                    pressableItem={(id: string) => setWorkerPressable(workers.find(i => i.id === id))}
                />
                <WrapperSubtitle>
                    <SubtitleContainer>
                        <Subtitles>Hashrate</Subtitles>
                        <SubtitlesValues>{workerPressable?.hr}Mh</SubtitlesValues>
                    </SubtitleContainer>
                </WrapperSubtitle>
            </>
        )
    }

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

            <Button mode='MD' txt={`${coins.length} coins`} onPress={() => navigation.navigate('Coins')} />

            <Divider />

            <View style={{ flex: 1, height: 50, top: 10 }} >
                <WorkerInfoComponent />
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