import React from 'react';
import { View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector'

// import { Container } from './styles';

export const Switch: React.FC = () => {

    interface SwitchFix extends JSX.Element { }

    const Switch = SwitchSelector as any as {
        new(): SwitchFix
    }

    const options = [
        { label: 'Delivery', value: 'delivery' },
        { label: 'Pickup', value: 'pickup' },
    ]

    const props: any = {
        options,
        initial: 0
    }

    return (
        <React.Fragment>
            {/* <SwitchSelector {...props} /> */}
        </React.Fragment>
    )
}
