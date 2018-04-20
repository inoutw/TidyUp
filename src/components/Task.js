/**
 * Created by qinai on 12/8/16.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TaskToolTip from './TaskToolTip.js';
import PropTypes from 'prop-types';

const Task = ({ task, taskAction })=>{
    /*var taskSymbalStamp = '';
    for(var i=0; i< task.timestamp; i++){
        taskSymbalStamp += '';
    }
     <View style={taskStyle.rowRight}>
     <Text style = {taskStyle.rowMark}>{taskSymbalStamp}</Text>
     </View>
     */
    return (
        <View style = {taskStyle.rowWrap}>
            <TaskToolTip taskAction={taskAction} priorityNum = {task.priority} taskId={task.taskid}
            />
            <View style={taskStyle.rowCenter}>
                <Text style={taskStyle.rowText}>{task.desc}</Text>
            </View>

        </View>
    )
}
export default Task;

const taskStyle = StyleSheet.create({
    rowWrap:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rowCenter:{
        height: 28,
        flex: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
    },
    rowRight:{
        flex: 2,
    },
    rowText:{
        lineHeight: 25,
        paddingLeft: 6,
    },
    rowMark:{
        color: 'orange',
    },

})

