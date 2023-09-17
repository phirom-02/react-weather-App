import { useState } from 'react';

import { useSearchHistoryStore } from '../../../store/searchHistoryStore';

import { Buttons } from './Buttons/Buttons';

import { InputForm } from './InputForm/InputForm';

import { DropdownResult } from './DropdownResult/DropdownResult';

import './LocationForm.css';

const LocationForm = () => {
	const { searchHistories } = useSearchHistoryStore();

	const [toggleHistory, setToggleHistory] = useState(false);

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
				handleToggleHistory={setToggleHistory}
			/>
			<Buttons setToggleHistory={setToggleHistory} toggleHistory={toggleHistory} />

			{/* Search Result */}
			{(query && !toggleHistory) && (
				<DropdownResult
					collection={searchSuggestion}
					message={
						query.length <= 3 ? 'Search location...' : 'Location not found'
					}
					setQuery={setQuery}
					setCollection={setSearchSuggestion}
					canSaveData={true}
				/>
			)}

			{toggleHistory && (
				<DropdownResult
					collection={searchHistories}
					message="You don't search have history"
					canRemoveData={true}
				/>
			)}
		</div>
	);
};

export { LocationForm };
