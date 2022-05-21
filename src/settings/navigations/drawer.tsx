import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ColorUtils } from '../../../assets/utils/colors';
import { StackNavigator } from './stack';
import { Feather } from '@expo/vector-icons'
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();


export const DrawerNavigation: React.FC = () => {

    return (
        ///@ts-ignore: Unreachable code error
        <Drawer.Navigator
            initialRouteName="Start"
            drawerContent={(props) => <></>}
            screenOptions={{
                headerTitleStyle: { color: "transparent" },
                drawerType: 'front',
                headerShown: false,
                overlayColor: ColorUtils.blur_color,
                drawerStyle: {
                    backgroundColor: ColorUtils.blur_color,
                    width: 300,
                },
                swipeEnabled: false
            }}
        >
            <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator >
    );
}