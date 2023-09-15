import axios from 'axios';

/**
 * API error handler
 * @param {ErrorObj} err
 */
const errorHandler = (err) => {
	let error = {
		message: 'Something went wrong. Please try again.',
	};

	if (err?.response) {
		error = {
			code: err.response.status,
			message: err.response.data.message,
		};
	} else {
		error.code = 1;
	}

	return Promise.reject(error);
};

export const weatherClient = axios.create({
	baseURL: 'https://pro.openweathermap.org/data/2.5/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		appid: '4e518f2a9383f67d5f592c38fc6edc85',
		units: 'metric',
	},
});

weatherClient.interceptors.response.use((res) => res.data, errorHandler);