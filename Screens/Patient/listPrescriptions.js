import React from 'react';
import {StyleSheet, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native'
import PreviewPrescription from '../../Components/Patient/PrescriptionCard';
import CompactCard from '../../Components/Patient/CompactCard';

export default function AllPrescription({navigation}) {
    const dummyData = [...Array(15).keys()].map((v, k)=>({
        id: 'key'+k,
        dr_name: "Dr xyz khanra",
        date: "dd|mm|yyyy",
        hospital_name: "Hospital Name"
    }));
    const FlatListItem = <TouchableOpacity onPress={()=>{navigation.navigate('PatientPrescrition');}}>
        <View style={ { marginBottom: 5 } }>
            <CompactCard />
        </View>
    </TouchableOpacity> ;

    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={ dummyData }
            renderItem ={ ({item})=>( FlatListItem ) }
            keyExtractor={item=>item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    compactView : {
        height: 80
    }
});