import './DailyForecast.css';

import rain from '../../../assets/04dn.svg';

const DailyForecast = () => {
	return (
		<section className="section daily-forecast__section">
			<h2 className="font-size-secondary1 font-color-primary header2">
				daily forecast
			</h2>

			<ul className="daily-forecast__list">
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
				<_DailyForecastItem />
			</ul>
		</section>
	);
};

const _DailyForecastItem = () => {
	return (
		<li className="daily-forecast__item">
			<div className="daily-forecast__item-date">
				<h3 className="font-size-primary1 font-color-primary">Wednesday</h3>
				<span className="font-color-accent">12 sep</span>
			</div>
			<span className="daily-forecast__item-degree font-color-primary">
				30ºC
			</span>
			<div className="daily-forecast__item-image">
				<img src={rain} alt="" />
			</div>
		</li>
	);
};

export { DailyForecast };
