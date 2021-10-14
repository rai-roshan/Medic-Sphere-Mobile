import React , { useEffect } from "react";
import {View , Text , Image  , StyleSheet } from "react-native";

import Loader from '../assets/loading.gif'

const DELAY_TIME = 3000;

export default function WelcomeScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('userLoginScreen');
        }, DELAY_TIME);
    },[]);

    return(
        <View style = {{ flex: 1 , justifyContent: 'center' , backgroundColor: 'white'}}>
            <Text style = {{ textAlign: 'center' , fontSize: 45}}> Medic Sphere </Text>
            <View style = {{ width: '50%' , height: '50%' , alignSelf: 'center'}}>
                <Image source = {Loader} style = {{alignSelf: 'center' , width: 150 , height: 150}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        backgroundColor: 'yellow',
        width: '1%',
        height: '1%'
    }
})