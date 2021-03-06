import React, {useLayoutEffect} from "react";
import {View, 
    StyleSheet, 
    Text, 
    ScrollView, 
    TouchableOpacity, 
    StatusBar, 
    FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import PreviewCard from '../../Components/Patient/PrescriptionCard';
import Folder from "../../Components/Patient/Folder";

import { AuthContext } from "../../Context/AuthContext";



const dummyData = [...Array(15).keys()].map((v, k)=>({
    id: 'key'+k,
    folderName: "Folder "+(v+1),
}));

const dummyRecentData = [
    {
        id: "recent1",
        drName: "Kunal Khanra",
        date: "12|10|2021",
        presecriptionData : [
            "some medicine A",
            "lizid L",
            "Pills 64x",
            "Table zoom",
            "some medice B"
        ]
    },
    {
        id: "recent2",
        drName: "Deepak Tiwari",
        date: "12|10|2021",
        presecriptionData : [
            "some medicine A",
            "lizid L",
            "Pills 64x",
            "Table zoom",
            "some medice B"
        ]
    },
    {
        id: "recent3",
        drName: "Roshan Rai",
        date: "12|10|2021",
        presecriptionData : [
            "some medicine A",
            "lizid L",
            "Pills 64x",
            "Table zoom",
            "some medice B"
        ]
    }
];

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
                    {
                        dummyRecentData.map( item=>(
                            <TouchableOpacity
                            key={item.id} 
                            onPress={ ()=>{ navigation.navigate('PatientPrescrition', item ); } } >
                            <PreviewCard
                            data={item} />
                        </TouchableOpacity>
                        ))
                    }
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
            
            <View style={styles.folderSection}>
                <Text style={styles.title}>
                    Folders
                </Text>
                <View style={styles.folderContainer}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={dummyData}
                renderItem={ ({item})=>(
                    <TouchableOpacity 
                    style={{margin: 10}}
                    onPress={()=>{ navigation.navigate('AllPrescription', {
                        folder: true } ); }} >
                        <Folder name={item.folderName} />
                    </TouchableOpacity>
                 ) }
                numColumns={2}
                keyExtractor={(item)=>(item.id)}>
                </FlatList>
                </View>
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
    },
    folderContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    folderSection: {
        flex: 2,
        margin: 10,
        marginBottom: 20
    }
})