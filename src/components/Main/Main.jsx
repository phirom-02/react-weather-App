import { CurrentWeather } from './CurrentWeather/CurrentWeather';

import { HourlyForecast } from './HourlyForecast/HourlyForecast';

import './Main.css';

const Main = () => {
	return (
		<main className="main">
			<CurrentWeather />
			<HourlyForecast />
			<DailyForecast />
		</main>
	);
};

const DailyForecast = () => {
	return (
		<section className="section daily-forecast__seciton">
			<h2 className="font-size-secondary1 font-color-primary header2">
				daily forecast
			</h2>
		</section>
	);
};

export { Main };
