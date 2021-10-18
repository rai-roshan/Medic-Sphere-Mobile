import React from 'react';
import {View,  StyleSheet, ScrollView } from "react-native";

import PrescriptionCard from '../../Components/Patient/PrescriptionCard';
import PrescriptionDetails from "../../Components/Patient/PrescriptionDetails";

export default function Prescription({ navigation, route }) {

    return (
        <View style={ {...styles.container, alignItems: "center" } }>
            <View style={{...styles.fullCard, margin: 10 }} >
                <ScrollView 
                horizontal={true}
                pagingEnabled={true}>
                    <PrescriptionCard 
                    data={route.params} />
                    <PrescriptionDetails
                    data={route.params} />
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