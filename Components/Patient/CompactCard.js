import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import { Card } from 'react-native-paper';

export default function CompactCard({ data, backgroundColor="#ebebeb" }) {
    const screenWidth = Dimensions.get("window").width;
    const {drName, date, hospitalName} = data;
    console.log('compact card', data);
    return (
        <Card style={ { width: screenWidth-20 } }>
            <Card.Content style={ {...styles.cardContent, backgroundColor } }>
                <View style={ styles.previewCardTitle } >
                    <Text style={styles.primaryText}>{`By:  Dr ${drName}`}</Text>    
                    <Text style={styles.secondaryText}>{date}</Text>
                </View>        
                <View style={ styles.flexRow }>
                    <Text style={styles.secondaryText}>{hospitalName}</Text>
                </View>
                <View style={ styles.flexRow}>
                </View>
            </Card.Content>
        </Card>  
    );
}


const styles = StyleSheet.create({
    cardContent: {
        margin: 5,
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