import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Pressable, Button } from 'react-native'
import { Button as PaperButton } from 'react-native-paper';
import { FontAwesome, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import FlatListItem from '../../Components/Patient/ListItem';

const dummyData = [...Array(15).keys()].map((v, k)=>({
    id: 'key'+k,
    dr_name: "Dr xyz khanra",
    date: "dd|mm|yyyy",
    hospital_name: "Hospital Name"
}));

// options for long press multi select
const RightHeaderButtons = ({ folder })=>(
    <View style={{flexDirection: "row"}}>
        { folder ? <TouchableOpacity
        style={{marginRight: 10}}
        onPress={ ()=>{console.log("remove from folder");} }>
            <MaterialCommunityIcons 
            name="folder-remove" 
            size={24} 
            color="black" />
        </TouchableOpacity> :
        <>
            <TouchableOpacity 
            style={{marginRight: 20}} 
            onPress={()=>{console.log("add to folder"); }}>
                <Foundation name="folder-add" size={24} color="black" /> 
            </TouchableOpacity >
            <TouchableOpacity 
            style={{marginRight: 10}}
            onPress={()=>{ console.log("star"); }}>
                <FontAwesome name="star" size={24} color="black" />
            </TouchableOpacity>
        </>
        }
    </View>
)


export default function AllPrescription({navigation, route}) {
    const [selectedItems, setSelectedItems] = useState([]); //kep only ids
    
    const handleLongPress = (item)=>{
        selectItems(item);
        multiSelectOptions();
    };
    const selectItems = (item) => {
        //deselect
        if( isSelected(item) ){
            const newList = selectedItems.filter( listItem=>(listItem!==item.id) );
            setSelectedItems([...newList]);
        }//select
        else
            setSelectedItems([...selectedItems, item.id]);
        console.log(selectedItems);
    };
    const handleOnPress = (item) => {
        if(selectedItems.length){
            selectItems(item);
        }
        else{
            navigation.navigate('PatientPrescrition');
        }
    };
    const isSelected = (item) => (
        selectedItems.includes(item.id)
    );
    const deSelect = () => {
        console.log("deslect op[tion");
        setSelectedItems([]);
    };
    const multiSelectOptions = () => {
        navigation.setOptions(
            {
                title: "",
                headerRight: ()=>(
                    <RightHeaderButtons folder={route.params.folder} />
                )
            } 
        );
    };

    return (
        <Pressable onPress={ deSelect } style={styles.container} >
            <FlatList
            showsVerticalScrollIndicator={false}
            data={ dummyData }
            renderItem ={ ({item})=>( 
                <FlatListItem 
                    item={item}
                    handleOnPress={ handleOnPress }
                    handleLongPress={ handleLongPress }
                    isSelected={ isSelected }
                />) }
                keyExtractor={item=>item.id}
                />
        </Pressable>
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