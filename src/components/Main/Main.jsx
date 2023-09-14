import { CurrentWeather } from './CurrentWeather/CurrentWeather';

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

const HourlyForecast = () => {
	return (
		<section className="section hourly-forecast__seciton">
			<h2 className="font-size-secondary1 font-color-primary header2">
				hourly forecast
			</h2>

			<ul className="hourly-forecast__cards-wrapper">
				<li className="hourly-forecast__card">
					<span></span>
				</li>
			</ul>
		</section>
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
