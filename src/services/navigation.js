/**
 * 实现编程式导航
 * referrence:
 * https://github.com/react-navigation/react-navigation/issues/558;
 * https://reactnavigation.org/docs/navigators/navigation-actions
 */
import { NavigationActions } from 'react-navigation';


let navigator = null;
export function setNavigator(nav) {
	if (nav) {
		navigator = nav;
	}
}
export function navigate(routeName, params) {
	if (navigator) {
		const navigateAction = NavigationActions.navigate({ routeName, params });
		navigator.dispatch(navigateAction);
	}
}
export function goBack() {
	if (navigator) {
		const backAction = NavigationActions.back({});
		navigator.dispatch(backAction);
	}
}