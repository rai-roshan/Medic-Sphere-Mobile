import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Pressable, Text } from 'react-native'
import { Modal, Portal, TextInput, Button } from 'react-native-paper';
import { FontAwesome, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import FlatListItem from '../../Components/Patient/ListItem';

const dummyData = [...Array(15).keys()].map((v, k)=>({
    id: 'key'+k,
    dr_name: "Dr xyz khanra",
    date: "dd|mm|yyyy",
    hospital_name: "Hospital Name"
}));

// options for long press multi select
const RightHeaderButtons = ({ folder, showModal })=>(
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
            onPress={()=>{ showModal(); console.log("add to folder"); }}>
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
);

const FolderModal = ({ visible, hideModal, text, handleText, handleModal  })=> (
        <Portal>
            <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={ styles.modalConatiner }>
            <TextInput
            label="Folder Name"
            value={text}
            onChangeText={ handleText }
            />
            <Button
            style={{marginTop: 15}}
            mode="contained" 
            color="#60c1eb" 
            onPress={ handleModal }>
                Ok
            </Button>
            </Modal>
        </Portal>
);


export default function AllPrescription({navigation, route}) {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [selectedItems, setSelectedItems] = useState([]); //kep only ids

    const handleText = (text)=>{
        setText(text);
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
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
                    <RightHeaderButtons 
                    folder={route.params.folder}
                    showModal={ showModal } />
                )
            } 
        );
    };
    const handleModal = () => {
        hideModal(); 
        deSelect();
    }

    return (
        <Pressable onPress={ deSelect } style={styles.container} >
            <FolderModal 
            visible={visible} 
            hideModal={hideModal} 
            text={text} 
            handleText={handleText}
            handleModal={handleModal}/>
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
    },
    modalConatiner: {
        backgroundColor: 'white', 
        padding: 10,
        margin: 20,
        borderRadius: 5
    }
});