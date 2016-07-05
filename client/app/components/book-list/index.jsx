import React, { Component } from 'react';

import style from './book-list';

class BookList extends Component {

	selectBookHandler(selectedBook) {
		this.props.selectBook(selectedBook);
	}

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={this.selectBookHandler.bind(this, book) }
					className={'list-group-item ' + style.item}>{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="col-md-4">
				<ul className="list-group">
					{this.renderList() }
				</ul>
			</div>
		);
	}
}

export default BookList;