/**
 * Created by qinai on 11/20/16.
 */
import {combineReducers} from 'redux';
import tasks from './tasks.js';

//The shape of the state object matches the keys of the passed reducers
export default combineReducers({
    tasks,
})