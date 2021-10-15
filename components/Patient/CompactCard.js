import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import { Card } from 'react-native-paper';

export default function CompactCard() {
    const screenWidth = Dimensions.get("window").width;
    return (
        <Card style={ { width: screenWidth-20 } }>
            <Card.Content style={ styles.cardContent }>
                <View style={ styles.previewCardTitle } >
                    <Text style={styles.primaryText}>By:  Dr xyz khanra</Text>    
                    <Text style={styles.secondaryText}>dd|mm|yyyy</Text>
                </View>        
                <View style={ styles.flexRow }>
                    <Text style={styles.secondaryText}>Hospital Name</Text>
                </View>
                <View style={ styles.flexRow}>
                </View>
            </Card.Content>
        </Card>  
    );
}


const styles = StyleSheet.create({
    cardContent: {
        // flex: 1,
        margin: 5,
        backgroundColor: "#ebebeb",
        minWidth: 90
    },
    previewCardTitle: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    primaryText: {
        fontSize: 16,
        color: "#808080",
    },
    secondaryText: {
        color: "#808080",
    },
    flexRow: {
        flexDirection: "row",
        marginVertical: 5
    }
})