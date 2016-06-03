(function(){
	const LIBRARYC3PO_URL= "https://prog3-ufcg-project.herokuapp.com",
		  API_URL = LIBRARYC3PO_URL + '/api',
		  BOOKS_API_URL= API_URL + '/book',
		  INDEX_API_URL= API_URL + '/',
		  REMOVE_BOOK  = BOOKS_API_URL + '/remove',
		  UPDATE_BOOK  = BOOKS_API_URL + '/update',
		  ALL_BOOKS_URL= BOOKS_API_URL+ '/library',
		  ADD_BOOK = BOOKS_API_URL + '/add';

	app.constant("URL", {
		SERVER_URL: LIBRARYC3PO_URL,
		BOOKS_API_URL: BOOKS_API_URL,
		INDEX_API_URL: INDEX_API_URL,
		ALL_BOOKS_URL: ALL_BOOKS_URL,
		REMOVE_BOOK : REMOVE_BOOK,
		UPDATE_BOOK: UPDATE_BOOK,
		ADD_BOOK: ADD_BOOK
	});
})();