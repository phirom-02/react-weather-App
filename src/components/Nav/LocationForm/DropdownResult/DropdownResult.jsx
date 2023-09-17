import { useState, useEffect } from 'react';

import useWeatherStore from '../../../../store/weatherStore';

import { useSearchHistoryStore } from '../../../../store/searchHistoryStore';

import './DropdownResult.css';

const DropdownResult = ({
	collection = [],
	message = '',
	setCollection,
	setQuery,
	canSaveData = false,
	canRemoveData = false,
}) => {
	const { fetchWeather, setIsLoading } = useWeatherStore();

	const [focusedIndex, setFocusedIndex] = useState(-1);

	const { addSearchHistory, removeSearchHistory } = useSearchHistoryStore();

	const handleFetchWeatehr = (item) => {
		setIsLoading(true);
		fetchWeather(item.lat, item.lon);
		if (!canRemoveData) {
			setCollection([]);
			setQuery('');
		}

		if (canSaveData) addSearchHistory(item);
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
				handleFetchWeatehr(selectedItem);
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
						>
							{!canRemoveData ? (
								<span
									className="dropdown-list__content"
									onClick={() => handleFetchWeatehr(item)}
								>
									{item.label}
								</span>
							) : (
								<>
									<span
										className="dropdown-list__content"
										onClick={() => handleFetchWeatehr(item)}
									>
										{item.label}
									</span>
									<span
										className="remove-btn"
										onClick={() => removeSearchHistory(item.id)}
									>
										<i className="ti ti-x font-color-primary"></i>
									</span>
								</>
							)}
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
