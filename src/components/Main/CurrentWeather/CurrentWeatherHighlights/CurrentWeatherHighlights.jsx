import useWeatherStore from '../../../../store/weatherStore';

import './CurrentWeatherHighlights.css';

const CurrentWeatherHighlights = ({ currentWeatherData }) => {
	const { feelsLike, humidity, tempMax, tempMin, windSpeed, sunset, sunrise } =
		currentWeatherData;

	return (
		<ul className="current-weather__highlights">
			<_HighlightsElement
				iconChildren={<i className="ti ti-temperature icon-size-primary"></i>}
				titleKey="feels like"
				value={`${feelsLike}ºC`}
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-arrows-sort icon-size-primary"></i>}
				titleKey="min/max"
				value={`${tempMin}~${tempMax}ºC`}
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-wind icon-size-primary"></i>}
				titleKey="wind speed"
				value={`${windSpeed} km/h`}
			/>

			<_HighlightsElement
				iconChildren={
					<i className="ti ti-droplet-half-2-filled icon-size-primary"></i>
				}
				titleKey="humidity"
				value={`${humidity}%`}
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-sunrise icon-size-primary"></i>}
				titleKey="sunrise"
				value={`${sunrise.formattedHour}:${
					sunrise.minutes < 10 ? '0' + sunrise.minutes : sunrise.minutes
				} ${sunrise.period}`}
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-sunset icon-size-primary"></i>}
				titleKey="sunset"
				value={`${sunset.formattedHour}:${
					sunset.minutes < 10 ? '0' + sunset.minutes : sunset.minutes
				} ${sunset.period}`}
			/>
		</ul>
	);
};

/*
 * TODOs: Add internal functionnaming convention to the convention guide
 */

const _HighlightsElement = ({ iconChildren, titleKey, value }) => {
	return (
		<li className="current-weather__highlights-item">
			{iconChildren}
			<span className="highlights-item__key font-size-primary1 font-color-primary">
				{titleKey}
			</span>
			<span className="highlights-item__value font-size-primary1 font-color-primary">
				{value}
			</span>
		</li>
	);
};

export { CurrentWeatherHighlights };
