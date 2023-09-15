import { useRef, useState } from 'react';

import useWeatherStore from '../../../store/weatherStore';

import { getIcon } from '../../../utils/helpers';

import './HourlyForecast.css';

const HourlyForecast = () => {
	const hourlyForecast = useWeatherStore((state) => state.hourlyForecastData);

	return (
		<section className="section hourly-forecast__section">
			<h2 className="font-size-secondary1 font-color-primary header2">
				<span>hourly forecast</span>
				<i className="ti ti-arrow-narrow-right"></i>
			</h2>

			<ul className="hourly-forecast__cards-wrapper">
				{hourlyForecast.map((item) => (
						<_HourlyForecastCard
							key={item.hour.formattedHour}
							hour={item.hour.formattedHour}
							period={item.hour.period}
							icon={item.icon}
							temp={item.temp}
						/>
				))}
			</ul>
		</section>
	);
};

const _HourlyForecastCard = ({ hour, period, icon, temp }) => {
	return (
		<li className="hourly-forecast__card">
			<span className="font-size-primary1 font-color-secondary">
				{hour} {period}
			</span>
			<div className="hourly-forecast__card-image-container">
				<img src={getIcon(icon)} alt="" />
			</div>
			<span className="font-size-primary1 font-color-secondary">{temp}ºC</span>
		</li>
	);
};

export { HourlyForecast };
