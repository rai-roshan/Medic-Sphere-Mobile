import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {Card, Title, Paragraph } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function PrescriptionDetails ({ data }) {
    console.log(data);
    return (
        <View style={ styles.container }>
            <Card style={ {...styles.blockCard, marginBottom: 10} }>
                <Card.Content>
                <Title>Doctor</Title>
                <Text>{`Dr ${data.drName}`}</Text>
                <Text>{`Doctor Id: XXXXXXXXXXX`}</Text>
                </Card.Content>
            </Card>
            <Card style={ {...styles.blockCard, marginBottom: 10} }>
                <Card.Content>
                <Title>Pharmacy</Title>
                <Paragraph>Reliance Pharmacy</Paragraph>
                <Text>{`Pharmacy Licence: XXXXXXXXXXX`}</Text>
                </Card.Content>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    },
    blockCard: {
        width: screenWidth-20,
        height: 200
    }
})