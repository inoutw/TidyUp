/**
 * Created by qinai on 1/23/17.
 */
import React, {Component, PropTypes} from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as TodoActions from '../actions/actionCreators.js';
import TodoItemList from '../components/TodoItemList.js';

class TodoItemListContainer extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
        // Injected by react-redux:
        let { dispatch } = this.props;

        dispatch(TodoActions.getTodoItemList());
    }
    render(){
        let { todoItems, dispatch } = this.props;
        let todoItemActionCreators = bindActionCreators(TodoActions, dispatch);
        return (
            <TodoItemList todoItems={todoItems} {...todoItemActionCreators} />
         );


    }
}
const mapStateToProps = (state) => {
    return {
        todoItems: state.todos.todoItems
    }
}

export default connect(mapStateToProps)(TodoItemListContainer);
