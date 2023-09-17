import { useState, useEffect } from 'react';

import useWeatherStore from '../../../../store/weatherStore';

import './DropdownResult.css';

const DropdownResult = ({
	collection = [],
	message = '',
	setCollection,
	setQuery,
}) => {
	const { fetchWeather, setIsLoading } = useWeatherStore();

	const [focusedIndex, setFocusedIndex] = useState(-1);

	const handleFetchWeatehr = (lat, lon) => {
		setIsLoading(true);
		fetchWeather(lat, lon);
		setCollection([]);
		setQuery('');
	};

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowDown') {
			setFocusedIndex((prevIndex) =>
				prevIndex < collection.length - 1 ? prevIndex + 1 : 0
			);
		} else if (e.key === 'ArrowUp') {
			setFocusedIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : collection.length - 1
			);
		} else if (e.key === 'Enter') {
			if (focusedIndex !== -1) {
				const selectedItem = collection[focusedIndex];
				// Perform the action when Enter is pressed
				handleFetchWeatehr(selectedItem.lat, selectedItem.lon);
			}
		} else if (e.key === 'Escape') {
			setFocusedIndex(-1);
		}
	};

	useEffect(() => {
		if (collection.length > 0)
			window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	return (
		<div className="dropdown-wrapper">
			<ul className="dropdown-list">
				{!message || collection.length > 0 ? (
					collection.map((item, index) => (
						<li
							className={`dropdown-list__item font-color-primary ${
								focusedIndex === index ? 'focused' : ''
							}`}
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
