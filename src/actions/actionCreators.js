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
    AsyncStorage.getItem('todoItems', (err, result) => {
        result = result? result: "[]";
        return dispatch({
            type: TYPES.RECEIVE_TODO,
            tasks: JSON.parse(result)
        })
    });
};
export function addTodoItem(todoItem){
    var todoItemStr = "";
    AsyncStorage.getItem("todo_shopping")
        .then((result)=> {
            var rel = result ? result+',' : '';
            todoItemStr += rel;
            todoItemStr += todoItem;
            AsyncStorage.setItem("todo_shopping", JSON.stringify(todoItemStr));
        });
    return {
        type: TYPES.ADD_TODO,
        todoItem
    };
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
