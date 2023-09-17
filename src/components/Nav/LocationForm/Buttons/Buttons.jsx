import './Buttons.css';

import useWeatherStore from '../../../../store/weatherStore';

const Buttons = () => {
	const { fetchWeather, setIsLoading } = useWeatherStore();

	const handleFetchDefaultLocationWeather = () => {
		if ('geolocation' in navigator) {
			setIsLoading(true);

			// Success callback for geolocation
			const onSuccess = (position) => {
				const { latitude, longitude } = position.coords;
				fetchWeather(latitude, longitude);
			};

			// Error callback for geolocation
			const onError = () => {
				fetchWeather(null, null, false);
			};

			// .getCurrentPosition accepts 2 arguments
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		} else fetchWeather(null, null, false);
	};

	return (
		<div className="location-form__btns">
			<Button modifierClass="btn-history">
				<i className="ti ti-history-toggle icon-size-primary"></i>
			</Button>

			<Button modifierClass="btn-current-location"  action={handleFetchDefaultLocationWeather}>
				<i className="ti ti-current-location icon-size-primary"></i>
			</Button>
		</div>
	);
};

const Button = ({
	modifierClass,
	children,
	action = () => console.log('Action')
}) => {
	return (
		<button className={`location-form__btn ${modifierClass}`} onClick={action}>
			{children}
		</button>
	);
};

export { Buttons };
