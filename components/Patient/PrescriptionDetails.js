import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Card, Title, Paragraph } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;

export default function PrescriptionDetails () {
    
    return (
        <View style={ styles.container }>
            <Card style={ {...styles.blockCard, marginBottom: 10} }>
                <Card.Content>
                <Title>Doctor Detail</Title>
                <Paragraph>Card content</Paragraph>
                </Card.Content>
            </Card>
            <Card style={ {...styles.blockCard, marginBottom: 10} }>
                <Card.Content>
                <Title>Pharmacy store detail</Title>
                <Paragraph>Card content</Paragraph>
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