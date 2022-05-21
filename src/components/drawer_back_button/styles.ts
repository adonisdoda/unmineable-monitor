import { styled } from 'stitches-native'


export const Container = styled('TouchableOpacity', {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 45,
    height: 45,
}).attrs(() => ({
    activeOpacity: 0.8
}))