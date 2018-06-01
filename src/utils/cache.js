import { http } from '../services';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
export default async function cache(req, cb) {
	if (typeof req === "string") {
		req = { url: req };
	}

	let { url, params = {} } = req;
	let key = url + "?" + qs.stringify(params);
	
	let data = await AsyncStorage.getItem(key);
	if (data) {
		try {
		
			cb(JSON.parse(data), 'fromcache');
		} catch (ex) {
			console.warn(ex);
		}
	}
	let res = await http(req);
	try {
		await AsyncStorage.setItem(key, JSON.stringify(res));
	}
	catch (ex) {
		let keys = await AsyncStorage.getAllKeys();
		console.error(ex);
		console.log('cache keys', keys);
		console.log(JSON.stringify(res))

	}
	
	cb(res, 'fromhttp');
}