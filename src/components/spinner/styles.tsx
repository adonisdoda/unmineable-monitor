import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styled } from 'stitches-native'
import { ColorUtils } from '../../../assets/utils/colors';

export const LoadingSpinner: React.FC = () => <ActivityIndicator
    color={ColorUtils.primary_whyte}
    size={'large'}
    animating={true}
    style={{ zIndex: 10 }}
/>


export const Container = styled('View', {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    zIndex: 100
})