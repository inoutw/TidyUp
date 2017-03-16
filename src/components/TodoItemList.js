/**
 * Created by qinai on 1/23/17.
 */
import React, {Component, PropTypes} from 'react';
import {ScrollView, ListView, StyleSheet, View, Text, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import TodoItem from './TodoItem.js';
import Icon from 'react-native-vector-icons/FontAwesome.js';

export default class TodoItemList extends Component{
    constructor() {
        super();
    }
    state = {
        itemText: '',
        dataSource: '',
        todoItems: []
    }
    static propTypes = {
        todoItems: PropTypes.array,
        deleteTodoItem: PropTypes.func.isRequired,
        addTodoItem: PropTypes.func.isRequired
    }

    componentWillMount(){
        AsyncStorage.getItem("todoItems", (err, result)=> {
            this.setState({itemText:result})
        });
    }
    _addTodoItem(){
        var addItem = this.refs.todoItem._lastNativeText;
        this.props.addTodoItem(addItem);
    }
    _addTodoItemBar(text){

    }
    _renderRow(rowData){
        return (
            <TodoItem key={rowData.todoItemId} todoItem={rowData}  todoAction={deleteTodoItem}/>
        );
    }
    render(){
        const { todoItems, deleteTodoItem } = this.props;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        var todoList = todoItems? todoItems: [];
        this.state = {
            dataSource: ds.cloneWithRows(todoList),
            todoItems: todoList,
            itemText: '',
        };

        return (
            <ScrollView style={itemListStyle.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={_renderRow}
                          style={itemListStyle.rowContainer}
                          enableEmptySections={true}
                />
                <View style={itemListStyle.inputItemView}>
                    <Icon name="circle-thin" size={18} color="#ccc"/>
                    <TextInput style={itemListStyle.inputItem} ref="todoItem"  defaultValue={this.state.itemText}
                               onChangeText={(text) =>{
                                   AsyncStorage.setItem("todoItems", text);
                               }} onEndEditing = {() => this._addTodoItem()}/>
                </View>
                <TouchableOpacity style={itemListStyle.addItem} onPress={() => this._addTodoItemBar()}>
                    <Text style={itemListStyle.addText}><Icon name="plus"></Icon> 添加项目</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const itemListStyle = StyleSheet.create({
    container:{
        flex: 7,
        marginTop: 20,
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
        marginTop: 10,
    },
    addText:{
        color:"#7A5AEC",
    },
    inputItemView:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    inputItem:{
        height: 30,
        width: 350,
        paddingLeft: 6,
    }
});