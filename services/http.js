import axios from 'axios';
function init() {
	const http = axios.create();
	http.interceptors.request.use((config) => {
		// Do something before request is sent 
		// setting header
		console.log('config', config);
		return config;
	}, (error) => {
		return Promise.reject(error);
		});
	http.interceptors.response.use((res) => {
		// Do something with response data
		const body = res.data;
		if (body.code !== '200') {
			console.error(body.msg, res.config.url);
			throw new Error(body);
		}
		return res;
	}, (error) => {
		console.log('error in reponse', error);
		let { response = {}, config = {}, message } = error;
		warn([
			`${message}`,
			`URL: ${config.url}`,
			`Method: ${config.method}`,
			`Status: ${response.status}`,
			`Request headers: \n${formatJson(config.headers)}`,
			`Response headers: \n${formatJson(response.headers)}`,
			`Response data: \n${formatJson(response.data)}`,
		])
		return Promise.reject(error);
		})
	return http;
}
function handleUrl(url) {
	if (isAbsoluteUrl(url)) {
		return url;
	}
	if (env.httpBaseUrl) {
		return `http://yryz-dev.yryz.com/yryz${url}`;
	}
}
function isAbsoluteUrl(url) {
	return /^https?:/
}
