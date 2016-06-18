import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import BookDetail from '../components/book-detail';

const propTypes = {
	selectedBook: PropTypes.object
};


class BookDetailContainer extends Component {
	render() {
		const { selectedBook } = this.props;
		return (
			<BookDetail book={selectedBook}/>
		);
	}
}

BookDetailContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const { selectedBook } = state.selectedBook;

	return {
		selectedBook
	}
}

export default connect(mapStateToProps)(BookDetailContainer);