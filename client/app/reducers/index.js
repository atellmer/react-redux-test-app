import { combineReducers } from 'redux';

import books from './books.js';
import selectedBook from './selectedBook.js';

const rootReducer = combineReducers({
  books,
  selectedBook
});

export default rootReducer;