import React , { useEffect } from 'react';
import {View, Text , StyleSheet , Image} from 'react-native';

import { List , Divider } from 'react-native-paper';
import { AuthContext } from '../../Context/AuthContext';
import SkeletonContent from 'react-native-skeleton-content';

const LOADING_TIME = 2000;

export default function Profile() {

    const [expanded, setExpanded] = React.useState(false);
    const [open , setOpen] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);

    const [isLoading , setIsLoading] = React.useState(true);

    const { signOut } = React.useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        } , LOADING_TIME)
    } , []);

    if( isLoading ) {
        return(
            <SkeletonContent
                containerStyle={{ flex: 1 , 
                    alignSelf: 'center' , 
                    height: '80%' , 
                    width: '95%' , 
                    padding: 20, 
                    alignItems: 'center',
                    elevation: 2,
                    margin: 20,
                    backgroundColor: '#f7f7f7'
                }}
                isLoading={isLoading}
                layout={[
                    { key: 'someId', width: 120, height: 120, marginBottom: 20 , borderRadius: 150},
                    { key: 'somed', width: '95%', height: 30, marginBottom: 20 },
                    { key: 'someOherId', width: '95%', height: 30, marginBottom: 20 },
                    { key: 'someOtherId', width: '35%', height: 30, marginBottom: 20 }
                ]}
                animationType="shiver"
                >
                <Text style={styles.normalText}>Your content</Text>
                <Text style={styles.bigText}>Other content</Text>
            </SkeletonContent>
        )
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.AvatarContainer}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style = {{
                    fontSize : 20,
                    marginTop: 5
                }}> Mr. Roshan Rai </Text>
            </View>
            <View style = {styles.buttonContainer}>
            <List.Section>
                <List.Accordion
                    title="Health Id"
                    left={props => <List.Icon {...props} icon="card-account-details" />}
                    expanded={expanded}
                    onPress={handlePress}
                    >
                    <List.Subheader> 1234ABXDY </List.Subheader>
                </List.Accordion>
                <Divider/>
                <List.Accordion
                    title = "Personal Details"
                    left={props => <List.Icon {...props} icon="account-details-outline"/>}
                    expanded={open}
                    onPress={() => setOpen(!open)}
                >
                    <View>
                        <List.Subheader style = {{ marginTop: -20}}> Name: Roshan Rai </List.Subheader>
                        <List.Subheader style = {{ marginTop: -20}}> Age: 22 </List.Subheader>
                        <List.Subheader style = {{ marginTop: -20}}> Contact Details: +918745 / rrai@gmail.com</List.Subheader>
                    </View>
                </List.Accordion>
                <List.Item
                    title="Settings"
                    left={props => <List.Icon {...props} icon="cogs"/>}
                    right={props => <List.Icon {...props} icon="chevron-right"/>}
                />
                <List.Item
                    title="Info"
                    left={props => <List.Icon {...props} icon="information-variant"/>}
                    right={props => <List.Icon {...props} icon="chevron-right"/>}
                />
                <List.Item
                    title="Logout"
                    left={props => <List.Icon {...props} icon="logout"/>}
                    onPress = {() => signOut()}
                />
            </List.Section>
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column' ,
    },
    AvatarContainer: {
        flex: 1,
        backgroundColor: '#00CED1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 2.5,
        backgroundColor: '#f7f7f7'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
      },
})