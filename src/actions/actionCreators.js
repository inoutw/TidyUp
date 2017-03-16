/**
 * Created by qinai on 11/21/16.
 */
'use strict';

import * as TYPES from './types.js';
import {AsyncStorage} from 'react-native';

export const getTasksFormStorage = () => (dispatch, getState) => { //?return a function with params dispatch and getState?
    AsyncStorage.getItem('tasks', (err, result) => {
        result = result? result: "[]";
        return dispatch({
            type: TYPES.RECEIVE_TASKS,
            tasks: JSON.parse(result)
        })
    });
}
export function addTask(task){
    var taskArr = [];
    AsyncStorage.getItem("tasks")
        .then((result)=> {
            taskArr.push(JSON.parse(result));
            taskArr.push(task);
            AsyncStorage.setItem("tasks", JSON.stringify(taskArr));
        });
    return {
        type: TYPES.ADD_TASK,
        task
    };
}
/*
 export function deleteTask(taskid){
 return {
 type: TYPES.DELETE_TASK,
 taskid
 };
 }
 */
export const deleteTask = (taskid) => (dispatch, getState) => {
    let tasksAfterDel = getState().tasks.tasks.filter( task => task.taskid !== taskid);
    AsyncStorage.setItem('tasks', JSON.stringify(tasksAfterDel),(err, result) => {
        return dispatch({
            type: TYPES.DELETE_TASK,
            taskid
        })
    });
};

export const getTodoItemList = () => (dispatch, getState) => {
    AsyncStorage.getItem('todo_shopping', (err, result) => {
        var res = result? result: '{}';
        console.log('res is ',res);
        return dispatch({
            type: TYPES.RECEIVE_TODO,
            todoItem: res
        })
    });
};
export const addTodoItem = (todoItem) => (dispatch, getState) => {
    var todoItemStr = "";
    AsyncStorage.getItem("todo_shopping", (err, result) => {
        var rel = result ? result+',' : '';
        todoItemStr += rel;
        todoItemStr += todoItem;
        AsyncStorage.setItem("todo_shopping", todoItemStr);
        return dispatch({
            type: TYPES.ADD_TODO_SHOPPING,
            todoItem: todoItemStr
        })
    })

};
export const deleteTodoItem = (todoItemId) => (dispatch, getState) => {
    let todoItemsAfterDel = getState().todos.todos.filter( task => task.todoItemId !== todoItemId);
    AsyncStorage.setItem('todoItems', JSON.stringify(todoItemsAfterDel),(err, result) => {
        return dispatch({
            type: TYPES.DELETE_TODO,
            todoItemId
        })
    });
};
