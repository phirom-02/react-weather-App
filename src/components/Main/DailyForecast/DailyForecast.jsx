import useWeatherStore from '../../../store/weatherStore';

import './DailyForecast.css';

import { getIcon } from '../../../utils/helpers';

const DailyForecast = () => {
	const dailyForecastData = useWeatherStore((state) => state.dailyForecastData);

	return (
		<section className="section daily-forecast__section">
			<h2 className="font-size-secondary1 font-color-primary header2">
				daily forecast
			</h2>

			<ul className="daily-forecast__list">
				{dailyForecastData.map((item, i) => (
					<_DailyForecastItem key={item.date[1]} data={item} index={i} />
				))}
			</ul>
		</section>
	);
};

const _DailyForecastItem = ({ data, index }) => {
	const {
		date: [dayOfWeek, date],
		icon,
		temp,
	} = data;

	return (
		<li className="daily-forecast__item">
			<div className="daily-forecast__item-date">
				<h3 className="font-size-primary1 font-color-primary">
					{index === 0 ? 'Tomorrow' : dayOfWeek}
				</h3>
				<span className="font-color-accent">{date}</span>
			</div>
			<span className="daily-forecast__item-degree font-color-primary">
				{temp}ºC
			</span>
			<div className="daily-forecast__item-image">
				<img src={getIcon(icon)} alt="" />
			</div>
		</li>
	);
};

export { DailyForecast };
