import './CurrentWeatherCard.css'

import clear from '../../../../assets/01d.svg';
import clearNight from '../../../../assets/01n.svg';
import shower from '../../../../assets/09dn.svg';

const CurrentWeatherCard = () => {
	return (
		<div className="current-weather__card">
			<div className="current-weather__text-container">
				<h3 className="font-size-location font-color-primary">Phnom Penh</h3>
				<span className="font-size-primary1 font-color-primary">
					Wed 13 Sep
				</span>
				<span className="font-size-primary1 font-color-primary">4:00 PM</span>
			</div>

			<div className="current-weather__image-container">
				<img src={shower} alt="" />
			</div>

			<div className="current-weather__text-container">
				<span className="font-size-temperature font-color-primary">30ºC</span>
				<span className="font-color-primary">cloudy</span>
			</div>
		</div>
	);
};

export { CurrentWeatherCard };
