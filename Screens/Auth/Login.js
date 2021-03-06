import React , { useState } from "react";
import { Text , View , StyleSheet } from "react-native";
import { TextInput , Button , Avatar } from 'react-native-paper';

import { AuthContext } from "../../Context/AuthContext";

export default function LoginScreen({ navigation }) {

    const [healthId , setHealthId] = useState('');
    const [password , setPassword] = useState('');
    const [loader , setLoader] = useState(false);
    const { signIn } = React.useContext(AuthContext);

    const handleSignInPress = () => {
        setLoader(true);
        signIn(healthId , password);
        setLoader(false);
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.innerContainer}>
                <Text
                    style = {{
                        fontSize: 35
                    }}
                > Medic Sphere </Text>
                {/* <View style = {{width: '100%' , flexDirection: 'row' , justifyContent: 'center' , marginTop: 10}}>
                    <Avatar.Icon size={50} icon="google" style = {{marginRight: 10}}/>
                    <Avatar.Icon size={50} icon="facebook" style = {{marginLeft: 10}}/>
                </View>
                <View style = {{flexDirection: 'row' , alignItems: 'center' , marginTop: 15}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}> OR </Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View> */}
                <View style = {{ width: '100%' , marginTop: 20}}>
                    <TextInput 
                        label="Health Id"
                        mode="outlined"
                        keyboardType = "number-pad"
                        onChangeText = {text => setHealthId(text)}
                    />
                    <TextInput 
                        label="Password"
                        mode="outlined"
                        secureTextEntry={true}
                        password={true}
                        onChangeText = {text => setPassword(text)}
                    />
                </View>
                <View style = {{width: '100%'}}>
                    <Button 
                        mode="contained"
                        loading = {loader}
                        style = {{ marginTop: 20}}
                        onPress = {() => handleSignInPress()}
                    >
                        Sign In
                    </Button>
                </View>
                <View>
                    <Button
                        color = "black"
                        onPress = {() => navigation.navigate('userSignupScreen')}
                    ><Text style = {{ fontSize: 10}}>New User? Sign Up</Text></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#00CED1',
        flex: 1,
        justifyContent: 'center'
    },
    innerContainer: {
        backgroundColor: '#f7f7f7',
        alignSelf: 'center',
        width: '95%',
        height: '90%',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column',
        elevation: 5,
        borderRadius: 10
    }
})