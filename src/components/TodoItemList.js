/**
 * Created by qinai on 1/23/17.
 */
import React, {Component, PropTypes} from 'react';
import {ScrollView, ListView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import TodoItem from './TodoItem.js';

export default class TodoItemList extends Component{
    static propTypes = {
        todoItems: PropTypes.array,
        deleteTodoItem: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        // var sourceList = this.props.todoItems ? this.props.todoItems: [];
        // this.state = {
        //     dataSource: ds.cloneWithRows(sourceList),
        //     todoItems: []
        // };
    }
    _addTodoItemBar(){

    }
    render(){
        const { todoItems, deleteTodoItem } = this.props;
        console.log("TodoItemList::this.props.todoItems is ", todoItems);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        var todoList = todoItems? todoItems: [];
        this.state = {
            dataSource: ds.cloneWithRows(todoList),
            todoItems: todoList
        };

        function _renderRow(rowData){
            return (
                <TodoItem key={rowData.todoItemId} todoItem={rowData}  todoAction={deleteTodoItem}/>
            );
        }

        return (
            <ScrollView style={itemListStyle.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={_renderRow}
                          style={itemListStyle.rowContainer}
                          enableEmptySections={true}
                />
                <TouchableOpacity style={itemListStyle.addItem} onPress={() => this._addTodoItemBar()}>
                    <Text>+ 添加项目</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const itemListStyle = StyleSheet.create({
    container:{
        flex: 7,
        marginTop: 30,
        paddingLeft: 6,
    },
    rowContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingRight: 2,
    },
    addItem:{
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        height: 30,
        alignItems: "flex-start",

    }
});