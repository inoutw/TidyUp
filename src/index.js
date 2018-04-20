/**
 * Created by qinai on 11/20/16.
 */
import React, { Component } from 'react';
import { View } from 'react-native';

import App from './screens';
import { store } from './store/index.js';
import { Provider } from 'react-redux';

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

