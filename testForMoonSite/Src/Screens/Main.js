import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput
} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShowItem from '../Components/ShowItem';


class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allData: [],
            filterData: [],
        }
    }


    myRenderItem = item => ShowItem(item, this.props);

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows', {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json;charset=utf-8"
            })
        })
            .then(res => res.json())
            .then(res => this.setState(({ allData: res, filterData: res })))
            .catch(err => console.log("err post=", err));
    }

    HeandleSearch = (showName) => {
        this.setState(prevState => ({
            filterData: prevState.allData.filter(show => show.name.toLowerCase().includes(showName.toLowerCase()))
        }))
    }


    render() {
        return (
            <View style={{ flex: 1 }}>

                <Header style={{ flex: 0.1 }} />
                <View style={styles.searchView}>
                    <Text>Search: </Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={this.HeandleSearch}
                    ></TextInput>
                </View>
                <FlatList
                    style={styles.flatList}
                    data={this.state.filterData}
                    renderItem={this.myRenderItem}
                    keyExtractor={(item, index) => item.id.toString()}

                />

                <Footer style={{ flex: 0.1 }} />
            </View>
        );
    }
}

export default Main;

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: "#5F9EA0",
        flexDirection: "row",
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    inputStyle: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        height: '80%',
        width: '30%'
    },
    flatList:{
        flex: 0.7, 
        width: "100%", 
        backgroundColor: "#B0C4DE" 
    }
})