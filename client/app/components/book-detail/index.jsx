import React, { Component } from 'react';

import style from './book-detail';

class BookDetail extends Component {
	render() {
		const selectedBook = this.props.selectedBook;

		if (!selectedBook) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div class="col-md-8">
				<div>
					<img class={'img-responsive ' + style.cover} src={selectedBook.cover} alt={selectedBook.title}/>
				</div>
				<h1 class={style.title}>{selectedBook.title}</h1>
				<div class={style.author}>{selectedBook.author}</div>
				<p class={style.description}>{selectedBook.description}</p>
			</div>
		);
	}
}

export default BookDetail;