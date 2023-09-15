import { create } from 'zustand';

import { fetchCurrentWeather, fetchHourlyForecast } from '../api/weatherAPI';

import { getDate, unixTimestampToHours } from '../utils/helpers';

const weatherStore = (set, get) => ({
	currentWeatherData: null,
	hourlyForecastData: [],
	error: null,
	isLoading: false,

	/**
	 * Fetch weather data (current time and 4 days forecast)
	 * @param {float} lat
	 * @param {float} lon
	 * @param {boolean} hasGeoLoc (default = true)
	 */
	fetchWeather: async (lat, lon) => {
		try {
			set({ isLoading: true });
			const res = await fetchCurrentWeather(lat, lon);
			await get()._fetchHourlyForecast(lat, lon);
			set({
				currentWeatherData: {
					location: res.name,
					date: getDate(res.dt),
					icon: res.weather[0].icon,
					temp: Math.round(res.main.temp),
					description: res.weather[0].description,
					feelsLike: Math.round(res.main.feels_like),
					tempMin: Math.round(res.main.temp_min),
					tempMax: Math.round(res.main.temp_max),
					windSpeed: Math.round(res.wind.speed * 3.6),
					humidity: res.main.humidity,
					timezone: res.timezone,
					sunset: unixTimestampToHours(res.sys.sunset, res.timezone),
					sunrise: unixTimestampToHours(res.sys.sunrise, res.timezone),
				},
				error: null,
			});
		} catch (error) {
			set({
				currentWeatherData: null,
				error,
			});
		} finally {
			set({ isLoading: false });
		}
	},

	setIsLoading: (bool) => set({ isLoading: bool }),
	_fetchHourlyForecast: async (lat, lon) => {
		try {
			const res = await fetchHourlyForecast(lat, lon);
			const data = [];
			// console.log(res);

			for (let i = 0; i < res.list.length; i++) {
				data.push({
					temp: Math.round(res.list[i].main.temp),
					hour: unixTimestampToHours(res.list[i].dt, res.city.timezone),
					icon: res.list[i].weather[0].icon,
				});
			}

			set({ hourlyForecastData: data, error: null });
		} catch (error) {
			set({
				hourlyForecast: [],
				error,
			});
		}
	},
});

const useWeatherStore = create(weatherStore);

export default useWeatherStore;
