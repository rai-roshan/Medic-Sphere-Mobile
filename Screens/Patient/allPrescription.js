import React from 'react';
import {StyleSheet, View} from 'react-native'
import PreviewPrescription from '../../Components/Patient/PrescriptionCard';

export default function AllPrescription() {
    return (
        <View style={styles.container}>
            <PreviewPrescription/>
            <PreviewPrescription/>
            <PreviewPrescription/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    }
});