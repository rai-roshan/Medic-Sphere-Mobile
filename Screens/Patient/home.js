import React, {useLayoutEffect} from "react";
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { Button } from 'react-native-paper';
import PreviewCard from '../../Components/Patient/PrescriptionCard';
import { FontAwesome5 } from '@expo/vector-icons';

import { AuthContext } from "../../Context/AuthContext";

export default function PatientHome({ navigation }) {

    const { signOut } = React.useContext(AuthContext);
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>{ navigation.navigate('PatientProfile'); }}>
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    },[navigation]);

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#34c778"
            />
            <View style={ styles.latestCard }>
                <Text style={styles.title}>
                    Latest Prescriptions
                </Text>
                <View style={{flex: 1, flexDirection: "row" }} >
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                    <TouchableOpacity onPress={ ()=>{ navigation.navigate('PatientPrescrition'); } } >
                        <PreviewCard/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=>{ navigation.navigate('PatientPrescrition'); } } >
                        <PreviewCard/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=>{ navigation.navigate('PatientPrescrition'); } } >
                        <PreviewCard/>
                    </TouchableOpacity>
                </ScrollView>
                </View>     
            </View>

            <View style={{ flexDirection: "row" }}>
                <Button 
                icon="star" 
                style={ {...styles.m10, flex: 1} } 
                contentStyle={{marginVertical: 10}}
                color="#60c1eb" 
                mode="contained" 
                onPress={ () => { navigation.navigate('AllPrescription', {
                    folder: true
                });} }>
                    Bookmarked
                </Button>
                <Button 
                icon="format-list-text" 
                style={ {...styles.m10, flex: 1 } }
                contentStyle={{marginVertical: 10}} 
                color="#f7f7f7" 
                mode="contained" 
                onPress={() => { navigation.navigate('AllPrescription', {
                    folder: false
                }); }}>
                    ALL
                </Button> 
            </View>
            <View style={ styles.secondaryPartition}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    m10 : {
        margin: 10
    },
    latestCard: {
        flex: 1,
        margin: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#4d4d4d",
        margin: 5
    },
    my10: {
        marginVertical: 10
    },
    secondaryPartition: {
        flex: 2
    }
})