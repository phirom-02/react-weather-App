import { useEffect, useState } from 'react';

import useWeatherStore from './store/weatherStore';

// import { getUserTimeZone } from './api/locationAPI';

import { Nav } from './components/Nav/Nav';

import { Main } from './components/Main/Main';

import './index.css';

import './App.css';

function App() {
	const { currentWeatherData, hourlyForecastData, isLoading, fetchWeather, setIsLoading, error } =
		useWeatherStore();

	useEffect(() => {
		if ('geolocation' in navigator) {
			setIsLoading(true);

			// Success callback for geolocation
			const onSuccess = (position) => {
				const { latitude, longitude } = position.coords;
				fetchWeather(latitude, longitude);
			};

			// Error callback for geolocation
			const onError = () => {
				fetchWeather(null, null, false);
			};

			// .getCurrentPosition accepts 2 arguments
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		} else fetchWeather(null, null, false);
	}, []);

	console.log(error ? ('ERROR', error) : 'NO ERROR');
	console.log(hourlyForecastData)

	return (
		<div className="App container">
			<Nav />
			{isLoading && <p>loading</p>}
			{currentWeatherData && <Main />}
		</div>
	);
}

export default App;
