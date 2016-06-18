const initialState = {
	books: 	[
		{ 
			title: 'JavaScript: The Good Parts',
			pages: 100
		},
		{ 
			title: 'Harry Potter',
			pages: 200
		},
		{ 
			title: 'The Dark Tower',
			pages: 300
		},
		{ 
			title: 'Eloquent Ruby',
			pages: 400
		}
	]
};

export default function books(state = initialState) {
	return state;
}
