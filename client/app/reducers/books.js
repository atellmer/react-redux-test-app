const initialState = {
	books: 	[
		{ 
			title: 'The Lord of the Rings',
			author: 'J. R. R. Tolkien',
			description: 'The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.',
			cover: 'http://cdn.pcwallart.com/images/lord-of-the-rings-book-series-wallpaper-2.jpg',
		},
		{ 
			title: 'The Hobbit',
			author: 'J. R. R. Tolkien',
			description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.',
			cover: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_5653_0-7.jpg?1384968217',
		},
		{ 
			title: 'Harry Potter and the Philosopher\'s Stone',
			author: 'J.K. Rowling',
			description: 'Harry Potter and the Philosopher\'s Stone is the first novel in the Harry Potter series and J. K. Rowling\'s debut novel, first published in 1997 by Bloomsbury. It was published in the United States as Harry Potter and the Sorcerer\'s Stone by Scholastic Corporation in 1998. The plot follows Harry Potter, a young wizard who discovers his magical heritage as he makes close friends and a few enemies in his first year at the Hogwarts School of Witchcraft and Wizardry. With the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just a year old.',
			cover: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer\'s_Stone.jpg',
		},
		{
			title: '1984',
			author: 'George Orwell',
			description: 'Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English author George Orwell published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance and public manipulation, dictated by a political system euphemistically named English Socialism (or Ingsoc in the government\'s invented language, Newspeak) under the control of a privileged elite of the Inner Party, that persecutes individualism and independent thinking as "thoughtcrime."',
			cover:'http://b68389.medialib.glogster.com/media/83d0585fbe3a3eecee1a541eebba9afc32edcbdf85dc6a7e8760226a13405d68/1984-by-opallynn-d4lnuoh.jpg',
		},
		{
			title: 'Atlas Shrugged',
			author: 'Ayn Rand',
			description: 'Atlas Shrugged is a 1957 novel by Ayn Rand. Rand\'s fourth and last novel, it was also her longest, and the one she considered to be her magnum opus in the realm of fiction writing. Atlas Shrugged includes elements of science fiction, mystery, and romance, and it contains Rand\'s most extensive statement of Objectivism in any of her works of fiction.',
			cover: 'http://img04.deviantart.net/0b49/i/2012/146/1/6/atlas_shrugged_act_1_by_decoechoes-d4xqfgz.jpg',
		},
	],
};

export default function books(state = initialState) {
	return state;
}
