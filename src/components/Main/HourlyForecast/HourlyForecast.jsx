import { useRef, useState } from 'react';

import './HourlyForecast.css';

import rain from '../../../assets/04dn.svg';

const HourlyForecast = () => {
  /*
  * TODO: add drag function the the drag component
  */

	return (
		<section className="section hourly-forecast__seciton">
			<h2 className="font-size-secondary1 font-color-primary header2">
				hourly forecast
			</h2>

			<ul className="hourly-forecast__cards-wrapper">
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
				<_HourlyForecastCard />
			</ul>
		</section>
	);
};

const _HourlyForecastCard = () => {
	return (
		<li className="hourly-forecast__card">
			<span className="font-size-primary1 font-color-secondary">01 pm</span>
			<div className="hourly-forecast__card-image-container">
				<img src={rain} alt="" />
			</div>
			<span className="font-size-primary1 font-color-secondary">30ºC</span>
		</li>
	);
};

export { HourlyForecast };
