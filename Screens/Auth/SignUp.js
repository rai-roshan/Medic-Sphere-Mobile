import React , {useState} from 'react';
import { View , StyleSheet, Text } from 'react-native';

import { Surface , TextInput , Button } from 'react-native-paper';

export default function Signup({ navigation }) {
    const [fullName , setFullName] = useState('');
    const [ANumber , setANumber] = useState('');
    const [dob , setDob] = useState('');
    const [MobileNumber , setMobileNumber] = useState('');
    const [password , setPassword] = useState('');

    const [loader , setLoader] = useState(false);

    const handleRegister = () => {
        setLoader(true);
        navigation.goBack();
    }

    return(
        <Surface style = {styles.container}>
            <View style = {styles.innerContainer}>
            <Text style={{textAlign: 'center' , fontSize: 30 , marginTop: 10 , marginBottom: 10}}> Register </Text>
                <TextInput 
                    label="Full Name" 
                    mode="outlined" 
                    style = {{ margin: 5 , marginLeft: 10 , marginRight : 10}}
                    onChangeText = {text => setFullName(text)}
                />
                <TextInput 
                    label="Adhar Number" 
                    mode="outlined" 
                    style = {{ margin: 5, marginLeft: 10 , marginRight : 10}} 
                    keyboardType="number-pad"
                    onChangeText={text => setANumber(text)}
                />
                <View style = {{flexDirection: 'row'}}>
                    <TextInput 
                        mode="outlined" 
                        label="Date of Birth" 
                        keyboardType="default" 
                        style={{flex:1 , margin: 5, marginLeft: 10 , marginRight : 10}}
                        onChangeText={text => setDob(text)}    
                    />
                    <TextInput 
                        mode="outlined" 
                        label="Mobile Number" 
                        keyboardType="number-pad" 
                        style={{flex:1 , margin: 5, marginLeft: 10 , marginRight : 10}}
                        onChangeText = {text => setMobileNumber(text)}
                    />
                </View>
                <TextInput 
                    label="Password" 
                    mode="outlined" 
                    style = {{margin:5, marginLeft: 10 , marginRight : 10}} 
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Button 
                    mode="contained" 
                    style={{margin:5, marginLeft: 10 , marginRight : 10}}
                    onPress={() => handleRegister()}
                    loading = {loader}
                > Register </Button>
                <View style = {{flexDirection: 'row' , alignItems: 'center' , margin: 10 , marginTop:15}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}> OR </Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                <Button mode="outlined" icon="google" style={{margin:5, marginLeft: 10 , marginRight : 10}}> Sign Up With Google </Button>
            </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#00CED1'
    },
    innerContainer: {
        alignSelf: 'center',
        backgroundColor: '#f7f7f7',
        width: '95%',
        height: '90%',
        elevation: 5,
        flexDirection: 'column',
        borderRadius: 10
    }
})