import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import CompactCard from './CompactCard';

export default function FlatListItem ({ item, handleLongPress, handleOnPress, isSelected }){
    return (
    <TouchableOpacity 
        onPress={  ()=>{ handleOnPress(item); } }
        onLongPress={ ()=>{ handleLongPress(item); } }>
        { isSelected(item) ? <View style={ { marginBottom: 5 } }>
                <CompactCard 
                data={item}
                backgroundColor="#b0b0b0" /> 
            </View> :
            <View style={ { marginBottom: 5 } }>
                <CompactCard 
                data={item}
                backgroundColor="#e6e6e6"  />
            </View> 
        }
    </TouchableOpacity>);
}