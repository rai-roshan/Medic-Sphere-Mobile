import React from 'react';
import {View,  StyleSheet, ScrollView } from "react-native";
import PrescriptionCard from '../../components/Patient/PrescriptionCard';
import PrescriptionDetails from '../../components/Patient/PrescriptionDetails';

export default function Prescription({ navigation }) {

    return (
        <View style={ {...styles.container, alignItems: "center" } }>
            <View style={{...styles.fullCard, margin: 10 }} >
                <ScrollView 
                horizontal={true}
                pagingEnabled={true}>
                    <PrescriptionCard/>
                    <PrescriptionDetails/>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fullCard: {
        flex: 1
    }
})