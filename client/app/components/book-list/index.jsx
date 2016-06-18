import React, { Component } from 'react';

class BookList extends Component {

	selectBookHandler(selectedBook) {
		this.props.selectBook(selectedBook);
	}

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={this.selectBookHandler.bind(this, book)}
					className="list-group-item">{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

export default BookList;