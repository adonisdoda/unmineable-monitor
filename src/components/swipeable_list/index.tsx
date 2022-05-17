import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ContainerItemSwipeable, IndicatorModeRigSwipeable, TextSwipeable } from './styles';

// import { Container } from './styles';

export interface DataSwipeableInterface { id: string, name: string, active?: boolean }

const SwipeableList: React.FC<{ data: DataSwipeableInterface[] }> = (props) => {


    const [selected, setSelected] = useState<string>('1')


    function SwipeableItem({ item }: { item: DataSwipeableInterface }): JSX.Element {

        const mode = item.id == selected ? 'selected' : 'unselected'
        const active = item.active ? 'selected' : 'unselected'

        return (
            ///@ts-ignore: Unreachable code error
            <ContainerItemSwipeable
                onPress={() => setSelected(item.id)}
                mode={mode}
            >
                {/* @ts-ignore: Unreachable code error */}
                {item.active !== undefined && <IndicatorModeRigSwipeable mode={active} />}
                {/* @ts-ignore: Unreachable code error */}
                <TextSwipeable mode={mode}>
                    {item.name}
                </TextSwipeable>
            </ContainerItemSwipeable>
        )
    }


    return (
        <FlatList
            contentContainerStyle={{ height: 50, width: '100%', justifyContent: 'space-evenly' }}
            data={props.data}
            horizontal
            keyExtractor={(item: DataSwipeableInterface) => item.id}
            renderItem={SwipeableItem}
        >

        </FlatList>
    );
}

export default SwipeableList;