import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import routes from './routes';

import { setNavigator } from '../services';
const AppNavigator = StackNavigator(routes, { headerMode: "none" });
export default class App extends Component {
	render() {
		return <AppNavigator ref={(nav) => { console.log(nav); setNavigator(nav) }}/>
	}
}