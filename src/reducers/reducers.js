/**
 * Created by qinai on 11/20/16.
 */
'use strict';

import * as TYPES from '../actions/types.js';
import ApiUtils from '../utils/ApiUtils.js';

const task = (state, action) => {
    switch(action.type){
        case TYPES.ADD_TASK:
            return action.task
        default:
            return state

    }
}
var initailTasksState = [];
const getInitailTasks = () => {
    return (
        fetch('http://localhost:9999/tasks.json')
            .then(ApiUtils.checkStatus)
            .then((response)=>response.json())
            .then((responseJson) => {
                console.log('Json is ', responseJson);
                initailTasksState = responseJson
                return initailTasksState;

            })
            .catch(e=>e)
    )

}
export const tasks = (state = {
    isFetching: false,
    didInvalidate: false,
    tasks: []
} , action) => {
    //getInitailTasks();
    //console.log("reducers:: initailTasksState is ", initailTasksState);
    //console.log('reducers:: ...state.tasks are ', ...state.tasks);
    switch(action.type){
        case TYPES.ADD_TASK:
            return {
                tasks:[
                    ...state.tasks,
                    action.task]
            }
        case TYPES.DELETE_TASK:
            return {
                tasks: state.tasks.filter( task => task.taskid !== action.taskid)
            }
        case TYPES.GET_TASKS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case TYPES.RECEIVE_TASKS:
            console.log("reducers:: action.tasks is ", action.tasks);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                tasks: action.tasks,
            }
        default:
            return state
            
    }
}
export const todos = (state = {
    isFetching: false,
    didInvalidate: false,
    todos: []
} , action) => {
    //console.log("reducers:: initailTasksState is ", initailTasksState);
    //console.log('reducers:: ...state.tasks are ', ...state.tasks);
    switch(action.type){
        case TYPES.ADD_TODO:
            return {
                todos:[
                    ...state.todos,
                    action.todo]
            }
        case TYPES.DELETE_TODO:
            return {
                todo: state.todos.filter( todo => todo.todoid !== action.todoid)
            }
        case TYPES.GET_TODOS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case TYPES.RECEIVE_TODOS:
            console.log("reducers:: action.todos is ", action.todos);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                todos: action.todos,
            }
        default:
            return state

    }
}
