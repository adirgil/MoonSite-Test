import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign' ;
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


class Main extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Icon name='back' size={20}/>
                <Text>Main</Text>
            </View>
        );
    }
}

export default Main;