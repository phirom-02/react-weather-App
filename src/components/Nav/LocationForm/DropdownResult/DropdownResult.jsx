import useWeatherStore from '../../../../store/weatherStore';

import './DropdownResult.css';

const DropdownResult = ({ collection = [], message = '', setCollection, setQuery }) => {
	const { fetchWeather, setIsLoading } = useWeatherStore();

	const handleFetchWeatehr = (lat, lon) => {
		setIsLoading(true);
		fetchWeather(lat, lon);
		setCollection([])
		setQuery('')
	};

	return (
		<div className="dropdown-wrapper">
			<ul className="dropdown-list">
				{!message || collection.length > 0 ? (
					collection.map((item) => (
						<li
							className="dropdown-list__item font-color-primary"
							key={item.id}
							onClick={() => handleFetchWeatehr(item.lat, item.lon)}
						>
							{item.label}
						</li>
					))
				) : (
					<p className="message font-color-primary">{message}</p>
				)}
			</ul>
		</div>
	);
};

export { DropdownResult };
