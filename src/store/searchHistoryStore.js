import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';
import { isDuplication, unshiftDuplication } from '../utils/helpers';

const searchHistoryStore = (set) => ({
	searchHistories: [],

	addSearchHistory: (newHistory) => {
		set((state) => ({
			searchHistories: isDuplication(state.searchHistories, newHistory, 'id')
				? unshiftDuplication(state.searchHistories, newHistory, 'id')
				: state.searchHistories.length >= 10
				? [newHistory, ...state.searchHistories.slice(0, 9)]
				: [newHistory, ...state.searchHistories],
		}));
	},

	removeSearchHistory: (id) => {
		set((state) => ({
			searchHistories: state.searchHistories.filter(
				(history) => history['id'] !== id
			)
		}));
	},
});

export const useSearchHistoryStore = create(
	devtools(persist(searchHistoryStore, { name: 'weatherSearchHistory' }))
);
