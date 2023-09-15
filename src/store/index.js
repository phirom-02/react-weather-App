import { create } from 'zustand';

import { fetchCurrentWeather } from '../api/weatherAPI';

const weatherStore = (set) => ({
	currentWeather: null,
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
			set({
				currentWeather: {
					temp: Math.round(res.main.temp),
					feelsLike: Math.round(res.main.feels_like),
					windSpeed: Math.round(res.wind.speed * 3.6),
					icon: res.weather[0].icon,
					description: res.weather[0].description,
					name: res.name,
				},
				error: null,
			});
		} catch (error) {
			set({
				currentWeather: null,
				error,
			});
		} finally {
			set({ isLoading: false });
		}
	},

	setLoading: (bool) => set({ isLoading: bool }),
});

const useWeatherStore = create(weatherStore);

export default useWeatherStore;
