import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconBack from 'react-native-vector-icons/AntDesign';
import Footer from '../Components/Footer'


class Show extends React.Component {

    constructor(props) {
        super(props)

        this.item = this.props.navigation.getParam('item')
    }

    HandleStarsIcon = numOfStars => {
        const arrOfStartsIcon = [];

        for (let i = 0; i < Math.floor(numOfStars); i++) {
            arrOfStartsIcon.push(<Icon key={i} name="star" size={20} />)
        }
        if (numOfStars - Math.floor(numOfStars) !== 0)
            arrOfStartsIcon.push(<Icon key={Math.floor(numOfStars)} name="star-half" size={20} />)

        return arrOfStartsIcon;
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('main')}
                        style={{ position: "absolute", left: 0}}
                    >
                        <IconBack name='back' size={20} />
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.item.name}</Text>
                </View>

                <View style={styles.middleBigView}>
                    <Image
                        style={{ width: "100%", flex: 0.5 }}
                        resizeMode='stretch'
                        source={{ uri: this.item.image.medium }}
                    />
                    <View style={{ flex: 0.5, justifyContent: "space-evenly" }}>
                        <View style={styles.ratingView}>
                            <Text>{this.item.rating.average}</Text>
                            <View style={{ flexDirection: 'row' }}>{this.HandleStarsIcon(this.item.rating.average)}</View>

                        </View>
                        <View style={styles.scrollInfoView}>
                            <ScrollView>
                                <Text style={styles.text}>Summary: {this.item.summary.slice(this.item.summary.indexOf('</b>') + 4, this.item.summary.indexOf('</p>'))}}</Text>
                                <Text style={styles.text}>Genres: {this.item.genres}</Text>
                                <Text style={styles.text}>Time: {this.item.schedule.time} Days:{this.item.schedule.days}</Text>
                                <Text style={styles.text}>ID: {this.item.network.id}</Text>
                                <Text style={styles.text}>Name: {this.item.network.name}</Text>
                                <Text style={styles.text}>Country Name: {this.item.network.country.name}</Text>
                                <Text style={styles.text}>Country Code: {this.item.network.country.code}</Text>
                                <Text style={styles.text}>Country TimeZone: {this.item.network.country.timezone}</Text>
                                <Text style={styles.text}>Language: {this.item.language}</Text>
                            </ScrollView>
                        </View>
                    </View>

                </View>

                <Footer style={{ flex: 0.1 }} />
            </View>
        );
    }
}
export default Show;

const styles = StyleSheet.create({
    titleView: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#B0C4DE",
        justifyContent: "center"
    },
    middleBigView: {
        flex: 0.8,
        backgroundColor: '#B0C4DE'
    },
    ratingView: {
        flexDirection: 'row',
        flex: 0.2,
        backgroundColor: "#20B2AA",
        marginHorizontal: "5%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    scrollInfoView:{
        flex: 0.5, 
        backgroundColor: "#778899", 
        marginHorizontal: "5%", 
        justifyContent: 'space-evenly' 
    },
    text:{
        marginVertical: '3%', 
        marginHorizontal: '3%' ,
        fontSize: 15, 
        fontWeight: '800'
    },
    title:{
        textAlign:"center", 
        fontSize: 20, 
        fontWeight: 'bold'
    }
})