/**
 * Created by qinai on 12/27/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, AsyncStorage} from 'react-native';


export default class PreferView extends Component{
    constructor(){
        super();
        this.state = {
            plans: '',
        }
    }
    componentWillMount(){
        AsyncStorage.getItem("plans", (err, result)=> {
            this.setState({plans:result})
        });
    }
    render(){
        return (
            <Image source={require('../static/images/note_back_tiny.png')} style={preferStyle.backgroundImage}>
                <View style={preferStyle.preferContainer}>
                    <View style={preferStyle.textWrap}>
                        <TextInput style={preferStyle.multiInput} multiline={true} ref="todoPlan"
                                   defaultValue={this.state.plans}
                                   onChangeText={(text) => {
                                       //console.log("text is ",text);
                                       AsyncStorage.setItem("plans", text);
                                   }}
                        >
                        </TextInput>
                    </View>
                </View>
            </Image>
        )
    }
}
const preferStyle = StyleSheet.create({
    preferContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    textWrap:{
        borderColor: '#ddd',
        borderStyle: 'solid',
        backgroundColor: 'rgba(0,0,0,0)',
        width: 330,
    },
    multiInput:{
        fontSize: 15,
        marginRight: 3,
        height: 508,
        lineHeight: 23,
    }
})