/**
 * Created by qinai on 1/17/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoItemListContainer from '../containers/TodoItemListContainer.js';

export default class TodoList extends Component{
    constructor(props){
        super(props);
    }
    _navigateToSubview(title){
        console.log("this.props is ", this.props);
        this.props.navigator.push({
            component: TodoItemListContainer,
            title: title,
            leftButtonIcon: 'chevron-left',
            onLeftButtonPress: () => this.props.navigator.pop(),
            passProps: this.props,
        });
    }
    render(){
        return (
            <View style={todoStyle.todoContainer}>
                <TouchableOpacity style={[todoStyle.todoItem,todoStyle.borderTopStyle]} onPress={() => this._navigateToSubview('Shopping')}>
                    <View>
                        <Icon name="shopping-basket" color="#FF4400" size={18}>
                            <Text> Shopping</Text>
                        </Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={todoStyle.todoItem} onPress={() => this._navigateToSubview('Movie')}>
                    <View>
                        <Icon name="film" color="purple" size={18}>
                            <Text> Movie to watch</Text>
                        </Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={todoStyle.todoItem} onPress={() => this._navigateToSubview('Reading')}>
                    <View>
                        <Icon name="book" color="green" size={18} >
                            <Text> Reading</Text>
                        </Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={todoStyle.todoItem} onPress={() => this._navigateToSubview('Sports')}>
                    <View>
                        <Icon name="futbol-o" color="#4C8EFB" size={18}>
                            <Text> Play sports</Text>
                        </Icon>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const todoStyle = StyleSheet.create({
    todoContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 80,
        paddingLeft: 6,
    },
    borderTopStyle:{
        borderTopWidth:1,
        borderTopColor: "#eee",
    },
    todoItem:{
        height: 60,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingTop: 10,
    },
})