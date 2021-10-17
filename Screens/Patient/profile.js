import React from 'react';
import {View, Text , StyleSheet , Image} from 'react-native';

import { List , Divider } from 'react-native-paper';
import { AuthContext } from '../../Context/AuthContext';

export default function Profile() {

    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);

    const { signOut } = React.useContext(AuthContext);

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
                <List.Item
                    title = "Personal Details"
                    left={props => <List.Icon {...props} icon="account-details-outline"/>}
                    right={props => <List.Icon {...props} icon="chevron-right"/>}
                />
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