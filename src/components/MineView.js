/**
 * Created by qinai on 12/27/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MineView extends Component{
    render(){
        return (
            <View style={mineStyle.mineContainer}>
                <Text>this is me!</Text>
            </View>
        )
    }
}

const mineStyle = StyleSheet.create({
    mineContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})