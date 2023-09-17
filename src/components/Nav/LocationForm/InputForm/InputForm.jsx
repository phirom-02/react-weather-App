import { useState } from 'react';

import locationData from '../../../../data/location_data.json';

import './InputForm.css';

const InputForm = ({ handleSearchSuggestion, setQuery, query }) => {

	const handleSearch = (query) => {
		setQuery(query);

		if (query.length > 3) {
			const filteredLocation = locationData
				.filter((location) =>
					location.name.toLowerCase().includes(query.toLowerCase())
				)
				.slice(0, 5);

			handleSearchSuggestion(
				filteredLocation.map((location) => ({
					id: location.id,
					label: location.name + ', ' + location.country_name,
					lat: location.coord.lat,
					lon: location.coord.lon,
				}))
			);
		} else handleSearchSuggestion([]);
	};

	return (
		<div className="location-form__input-container">
			<input
				className="location-form__input font-size-fixed font-color-primary"
				placeholder="Search location"
				value={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<span
				className="location-form__input-cancel"
				onClick={() => setQuery('')}
			>
				<i className="ti ti-x"></i>
			</span>
		</div>
	);
};

export { InputForm };
