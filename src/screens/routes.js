import React, { Component } from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';
import styles from '../styles';

import TodayView from './today/TodayView';
import WeekView from './week/WeekView';
import MonthView from './month/MonthView';
import YearView from './year/YearView';
import TodoItemListContainer from './today/TodoItemListContainer';

let tabRoute = {
	TodayTab: {
		screen: TodayView,
		navigationOptions: {
			tabBarLabel: '当下',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'energy' : 'energy'}
					size={20}
					style={{ color: tintColor }}
				/>
			),
		}
	},
	WeekTab: {
		screen: WeekView,
		navigationOptions: {
			tabBarLabel: '我要做',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={'compass'}
					size={20}
					style={{ color: tintColor }}
				/>
			),
		}
	},
	MonthTab: {
		screen: MonthView,
		navigationOptions: {
			tabBarLabel: '收藏',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={'calendar'}
					size={20}
					style={{ color: tintColor }}
				/>
			),
		}
	},
	YearTab: {
		screen: YearView,
		navigationOptions: {
			tabBarLabel: '我',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={'directions'}
					size={20}
					style={{ color: tintColor }}
				/>
			),
		}
	}
}
const TabNav = TabNavigator(tabRoute,
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		lazy: true,
		tabBarComponent: Platform.OS === 'android' ? TabBarBottom : TabBarTop,
		tabBarOptions: {
			showIcon: true,
			activeTintColor: styles.themeColor,
			inactiveTintColor: '#999',
			labelStyle: {
				fontSize: 12,
				marginTop: Platform.OS === 'android' ? 2 : 4,
			},
			style: {
				backgroundColor: '#fff',
				height: 60,
				borderTopColor: '#e8e8e8',
				borderTopWidth: 1,
				elevation: 0,
				paddingBottom: 4,
			},
			tabStyle: {
				padding: 0,
				paddingTop: 4,
				justifyContent: 'center',
			},
			indicatorStyle: { backgroundColor: "transparent" },
		}
	});

export default routes = {
	Root: {
		screen: TabNav
	},
	TodoItemListContainer: {
		screen: TodoItemListContainer
	}
};