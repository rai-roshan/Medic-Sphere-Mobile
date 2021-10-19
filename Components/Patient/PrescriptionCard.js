import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Card, Paragraph } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function PrescriptionCard({ data }) {
    
    return (
        <Card style={ { flex: 1, width: screenWidth-20 } }>
            <Card.Content style={ styles.cardContent }>
                <View style={ styles.previewCardTitle } >
                    <View>
                        <Text style={styles.primaryText}>{`By: Dr ${data.drName}`}</Text>
                    </View>
                    <View >
                        <Text style={styles.secondaryText}>{data.date}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10  }}>
                    { data.presecriptionData.map( (point, index) => (
                        <Text 
                        key={`point${index}`}
                        style={{color: "#808080"}} >
                            {point}
                        </Text>
                    ))}
                </View>
            </Card.Content>
        </Card>  
    );
}


const styles = StyleSheet.create({
    cardContent: {
        flex: 1,
        margin: 5,
        backgroundColor: "#ebebeb",
        width: screenWidth-30
    },
    previewCardTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundColor: "green"
    },
    primaryText: {
        fontSize: 16,
        color: "#808080",
    },
    secondaryText: {
        color: "#808080",
    }
})