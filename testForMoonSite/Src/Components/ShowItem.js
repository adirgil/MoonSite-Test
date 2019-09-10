import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ShowItem = ({ item }, props) => {

    HandleStarsIcon = numOfStars => {
        const arrOfStartsIcon = [];

        for (let i = 0; i < Math.floor(numOfStars); i++) {
            arrOfStartsIcon.push(<Icon key={i} name="star" size={20} />)
        }
        if (numOfStars - Math.floor(numOfStars) !== 0)
            arrOfStartsIcon.push(<Icon key={Math.floor(numOfStars)} name="star-half" size={20} />)

        return arrOfStartsIcon;
    }

    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate('show', { item: item })}
            style={styles.mainTouchable}
        >

            <View style={styles.mainView}>
                <Image
                    style={styles.image}
                    resizeMode='stretch'
                    source={{ uri: item.image.medium }}
                />
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.startView}>
                    <Text style={{ marginRight: '5%' }}>{item.rating.average}</Text>
                    {HandleStarsIcon(item.rating.average)}
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ShowItem;



const styles = StyleSheet.create({
    mainTouchable: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        height: 200,
        marginVertical: '2%',
        marginHorizontal: '10%',
        backgroundColor: '#708090'
    },
    mainView:{
        flex: 1,
         alignItems: 'center' 
    },
    image:{
        width: "100%",
        flex: 0.7 
    },
    nameText:{
        flex: 0.15, 
        fontSize: 20 
    },
    startView:{
        flexDirection: "row", 
        flex: 0.15 
    }
})