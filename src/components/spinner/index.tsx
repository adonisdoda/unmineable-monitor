import React from 'react';
import { StyleSheet, Modal } from 'react-native'
import { LoadingSpinner, Container } from './styles';
import { BlurView } from 'expo-blur';

export const Spinner: React.FC<{ loading: boolean }> = (props) => {
    return (
        <Modal animationType={'none'} visible={props.loading} transparent={true}  >
            <Container>
                <LoadingSpinner />
                <BlurView tint="dark" intensity={60} style={{ ...StyleSheet.absoluteFillObject }} />
            </Container>
        </Modal>
    )
}