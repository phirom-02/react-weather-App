import { weatherClient } from './setup';
// ipLocationClient

/**
 * fetch weather for current time
 * @param {float} lat
 * @param {float} lon
 */
export const fetchCurrentWeather = async (lat, lon) => {
	const res = await weatherClient.get('/weather', {
		method: 'get',
		params: {
			lat,
			lon,
		},
	});

	return res;
};

export const fetchHourlyForecast = async (lat, lon) => {
	const res = await weatherClient.get('/forecast/hourly', {
		method: 'get',
		params: {
			lat,
			lon,
			cnt: 12,
		},
	});

	return res;
};
