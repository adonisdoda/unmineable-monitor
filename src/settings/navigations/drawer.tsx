import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ColorUtils } from '../../../assets/utils/colors';
import { StackNavigator } from './stack';
// import { Feather } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();


export const DrawerNavigation: React.FC = () => {

    return (
        ///@ts-ignore: Unreachable code error
        <Drawer.Navigator
            initialRouteName="Start"
            drawerContent={(props) => <></>}
            screenOptions={{
                headerTransparent: true,
                headerTitleStyle: { color: "transparent" },
                drawerType: 'front',
                headerTintColor: ColorUtils.secundary_white,
                swipeEnabled: false,
                overlayColor: ColorUtils.blur_color,
                drawerStyle: {
                    backgroundColor: ColorUtils.blur_color,
                    width: 300,
                }
            }}
        >
            <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator >
    );
}