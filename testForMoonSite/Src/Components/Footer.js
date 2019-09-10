import React from 'react'
import { View, Text, StatusBar,StyleSheet } from 'react-native';


const Footer = (props) => {
    return (
        <View style={[props.style, styles.footerView]}>
            <Text>Adir Gil</Text>
        </View>
    )
}
export default Footer;



const styles = StyleSheet.create({
    footerView:{
        width: "100%",
        backgroundColor: "#5F9EA0",
        justifyContent: "center",
        alignItems: "center"
    }
})