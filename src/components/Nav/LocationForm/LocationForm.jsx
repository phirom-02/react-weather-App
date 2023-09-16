import { useState } from 'react';

import { Buttons } from './Buttons/Buttons';

import { InputForm } from './InputForm/InputForm';

import { DropdownResult } from './DropdownResult/DropdownResult';

import './LocationForm.css';

const LocationForm = () => {
	const [searchSuggestion, setSearchSuggestion] = useState([]);

	const [query, setQuery] = useState('');

	// console.log(searchSuggestion);

	/**
	 * @param {Array} locations
	 */
	const handleSearchSuggestion = (locations) => {
		setSearchSuggestion(locations);
	};

	return (
		<div className="location-form">
			<InputForm
				handleSearchSuggestion={handleSearchSuggestion}
				setQuery={setQuery}
				query={query}
			/>
			<Buttons />

			{/* Search Result */}
			{query && (
				<DropdownResult collection={searchSuggestion} message={query.length <= 3 ? 'Search location...' : 'Location not found'} />
			)}
		</div>
	);
};

export { LocationForm };
