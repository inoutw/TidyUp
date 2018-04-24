/**
 * Created by qinai on 11/20/16.
 */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import AppIndex from './screens';
import { store } from './store';
import { Provider } from 'react-redux';

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppIndex style={{flex: 1}}/>
			</Provider>
		)
	}
}

