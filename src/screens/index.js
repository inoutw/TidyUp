import React, { Component } from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import routeConfig from './routes';

import { setNavigator } from './services';
const AppNavigator = StackNavigator(routeConfig, { headerMode: "none" });
export default class App extends Component {
	render() {
		<AppNavigator ref={(nav) => { console.log(nav); setNavigator(nav) }}/>
	}
}