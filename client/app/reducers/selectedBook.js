import * as types from '../constants/ActionTypes';

const initialState = {};

export default function books(state = initialState, action) {
	switch (action.type) {
		case types.SELECTED_BOOK:
			return Object.assign({}, state, {
				selectedBook: action.payload
			});

		default:
			return state;
	}
}
