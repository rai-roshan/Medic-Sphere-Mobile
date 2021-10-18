import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native'; 
import {Card, Paragraph} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

export default function Folder({name="dummy"}) {
    return (
        <Card style={styles.folder}>
            <View style={styles.cardContainer}>
            <FontAwesome name="folder" size={20} color="#ababab" style={{marginRight: 5}} />
            <Paragraph>
                {name}
            </Paragraph>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    folder: {
        padding: 10,
        width: (screenWidth-50)/2
        //width: 170,
    },
    cardContainer: {
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center"
    }
})