import './CurrentWeatherHighlights.css';

const CurrentWeatherHighlights = () => {
	return (
		<ul className="current-weather__highlights">
			<_HighlightsElement
				iconChildren={<i className="ti ti-temperature icon-size-primary"></i>}
				titleKey="feels like"
				value="32ºC"
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-arrows-sort icon-size-primary"></i>}
				titleKey="min/max"
				value="29ºC~32ºC"
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-wind icon-size-primary"></i>}
				titleKey="wind gusts"
				value="12 km/h"
			/>

			<_HighlightsElement
				iconChildren={
					<i className="ti ti-droplet-half-2-filled icon-size-primary"></i>
				}
				titleKey="humidity"
				value="78%"
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-sunrise icon-size-primary"></i>}
				titleKey="sunset"
				value="6:00 AM"
			/>

			<_HighlightsElement
				iconChildren={<i className="ti ti-sunset icon-size-primary"></i>}
				titleKey="sunrise"
				value="5:50 PM"
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
			<span className="highlights-item__key font-size-primary1">{titleKey}</span>
			<span className="highlights-item__value font-size-primary1">{value}</span>
		</li>
	);
};

export { CurrentWeatherHighlights };
