import useWeatherStore from '../../../store/weatherStore';

import { CurrentWeatherCard } from './CurrentWeatherCard/CurrentWeatherCard';

import { CurrentWeatherHighlights } from './CurrentWeatherHighlights/CurrentWeatherHighlights';

import './CurrentWeather.css';

const CurrentWeather = () => {
	const currentWeatherData = useWeatherStore(
		(state) => state.currentWeatherData
	);

	return (
		<section className="section current-weather__section">
			<h2 className="font-size-secondary1 font-color-primary header2">
				current weather
			</h2>

			<div className="current-weather__wrapper">
				<CurrentWeatherCard currentWeatherData={currentWeatherData} />
				<CurrentWeatherHighlights  currentWeatherData={currentWeatherData}/>
			</div>
		</section>
	);
};

export { CurrentWeather };
