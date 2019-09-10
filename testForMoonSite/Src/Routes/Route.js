import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "../Screens/Main";
import Show from "../Screens/Show";

const RootStack = () => {
    const AppNavigator = createStackNavigator(
        {
            main: {
                screen: Main,
            },
            show: {
                screen: Show
            }
        },
        {
            initialRoutName: 'Main',
            defaultNavigationOptions:{
                header:null
            }
        }


    );
    const Container = createAppContainer(AppNavigator)
    return <Container />;
}



export default RootStack;