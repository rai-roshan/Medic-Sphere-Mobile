import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Pressable } from 'react-native'
import PreviewPrescription from '../../Components/Patient/PrescriptionCard';
import CompactCard from '../../Components/Patient/CompactCard';

const dummyData = [...Array(15).keys()].map((v, k)=>({
    id: 'key'+k,
    dr_name: "Dr xyz khanra",
    date: "dd|mm|yyyy",
    hospital_name: "Hospital Name"
}));
//"#cfcfcf" "#8c8c8c"
const FlatListItem = ({ item, handleLongPress, handleOnPress, isSelected }) => (<TouchableOpacity 
        onPress={  ()=>{ handleOnPress(item); } }
        onLongPress={ ()=>{ handleLongPress(item); } }>
        { isSelected(item) ? <View style={ { marginBottom: 5 } }>
                <CompactCard 
                backgroundColor="#b0b0b0" /> 
            </View> :
            <View style={ { marginBottom: 5 } }>
                <CompactCard 
                backgroundColor="#e6e6e6"  />
            </View> 
        }
    </TouchableOpacity>);


export default function AllPrescription({navigation}) {
    const [selectedItems, setSelectedItems] = useState([]); //kep only ids
    
    const handleLongPress = (item)=>{
        selectItems(item);
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
    }
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