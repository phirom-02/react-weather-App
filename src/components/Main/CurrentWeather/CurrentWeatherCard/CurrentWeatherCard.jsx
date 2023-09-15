import useWeatherStore from '../../../../store/weatherStore';

import { getIcon } from '../../../../utils/helpers';

import './CurrentWeatherCard.css';

const CurrentWeatherCard = ({ currentWeatherData }) => {
	return (
		<div className="current-weather__card">
			<>
				<div className="current-weather__text-container">
					<h3 className="font-size-location font-color-primary">
						{currentWeatherData.location}
					</h3>
					<span className="font-size-primary1 font-color-primary">
						{currentWeatherData.date}
					</span>
				</div>

				<div className="current-weather__image-container">
					<img src={getIcon(currentWeatherData.icon)} alt="" />
				</div>

				<div className="current-weather__text-container">
					<span className="font-size-temperature font-color-primary">
						{currentWeatherData.temp}ºC
					</span>
					<span className="font-color-primary">
						{currentWeatherData.description}
					</span>
				</div>
			</>
		</div>
	);
};

export { CurrentWeatherCard };
