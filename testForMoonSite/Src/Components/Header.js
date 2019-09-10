import React from 'react'
import { View, Text, StatusBar,StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <View style={[props.style, styles.headerView]}>
            <Text style={styles.headerText}>SHOW's App</Text>
        </View>
    )
}

export default Header;




const styles = StyleSheet.create({
    headerView:{
        width: "100%",
        backgroundColor: "#5F9EA0",
        justifyContent: "center",
        alignItems:"center"
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20
    }
})