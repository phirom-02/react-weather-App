import { useEffect, useState } from 'react';

import axios from 'axios';

import './InputForm.css';

const InputForm = ({
	handleSearchSuggestion,
	handleToggleHistory,
	setQuery,
	query,
}) => {
	const [locationData, setLocationData] = useState([]);

	useEffect(() => {
		const fetchLocationData = async () => {
			try {
				const res = await axios.get(
					'https://lenghub1.github.io/city_json/cityname_data.json'
				);
				setLocationData(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchLocationData();
	}, []);

	const handleSearch = (query) => {
		setQuery(query);

		handleToggleHistory(false);

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
