import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Monitor from '../../screens/monitor'
import { Coins } from '../../screens/coins'
import { ColorUtils } from '../../../assets/utils/colors'


export type StackNavigatorType = {
    Monitor: undefined,
    Coins: undefined
}

// export type RegisterCodeScreenProps = StackScreenProps<IAuthStackParams, 'RegisterCode'>


const Stack = createNativeStackNavigator<StackNavigatorType>()

export const StackNavigator: React.FC = () => {
    return (
        ///@ts-ignore: Unreachable code error
        <Stack.Navigator
            screenOptions={() => ({
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTitleStyle: { color: 'transparent' },
                headerTintColor: ColorUtils.secundary_white
            })}
        >
            <Stack.Screen name="Monitor" component={Monitor} />
            <Stack.Screen name="Coins" component={Coins} />

        </Stack.Navigator>
    )
}