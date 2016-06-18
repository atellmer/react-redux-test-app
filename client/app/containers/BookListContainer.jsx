import React, { Component, PropTypes } from 'react';
import	{ bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookList from '../components/book-list';
import * as booksActions from '../actions/books';

const propTypes = {
	books: PropTypes.array
};

class BookListContainer extends Component {
	render() {
		const { books } = this.props;
		const { selectBook } = this.props.booksActions;
		return (
			<BookList 
				books={books}
				selectBook={selectBook}
			/>
		);
	}
}

BookListContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const { books } = state.books;

	return {
		books
	}
}

function mapDispatchToProps(dispatch) {
	return {
		booksActions: bindActionCreators(booksActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);