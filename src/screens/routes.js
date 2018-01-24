import { } from 'react-navigation';
import TodayView from './today/TodayView';
import WeekView from './week/WeekView';
import MonthView from './month/MonthView';
import YearView from './year/YearView';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';

export default routeConfig = {
	TodayTab: {
		screen: TodayView,
		navigationOptions: {
			tabBarLabel: '当下',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					name={focused ? 'energy' : 'energy'}
					size={24}
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
					name={focused ? 'compass' : 'compass'}
					size={24}
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
					name={focused ? 'calendar' : 'calendar'}
					size={24}
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
					name={focused ? 'directions' : 'directions'}
					size={24}
					style={{ color: tintColor }}
				/>
			),
		}
	}
}