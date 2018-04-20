import * as navigation from './navigation';
module.exports = {
	get setNavigator() {
		return navigation.setNavigator;
	},
	get navigate() {
		return navigation.navigate;
	},
	get goBack() {
		return navigation.goBack;
	}
}