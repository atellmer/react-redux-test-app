import * as types from '../constants/ActionTypes';

export function selectBook(book) {
	return {
		type: types.SELECTED_BOOK,
		payload: book,
	};
}

