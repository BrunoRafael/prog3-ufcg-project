(function(){
	const LIBRARYC3PO_URL= "http://localhost:8080",
		  ALL_BOOKS_URL= LIBRARYC3PO_URL + "/books",
		  REMOVE_BOOK  = ALL_BOOKS_URL + '/remove',
		  UPDATE_BOOK  = ALL_BOOKS_URL + '/update',
		  ADD_BOOK = ALL_BOOKS_URL + '/add/book';

	app.constant("URL", {
		SERVER_URL: LIBRARYC3PO_URL,
		ALL_BOOKS_URL: ALL_BOOKS_URL,
		REMOVE_BOOK : REMOVE_BOOK,
		ADD_BOOK: ADD_BOOK
	});
})();