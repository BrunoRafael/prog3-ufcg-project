(function(){
	const SERVER_URL= "http://localhost",
		  PORT= 8080,
		  LIBRARYC3PO_URL= SERVER_URL + ":" + PORT,
		  ALL_BOOKS_URL= LIBRARYC3PO_URL + "/books",
		  REMOVE_BOOK  = ALL_BOOKS_URL + '/remove',
		  ADD_BOOK = ALL_BOOKS_URL + '/add/book';

	app.constant("URL", {
		SERVER_URL: SERVER_URL,
		PORT: PORT,
		LIBRARYC3PO_URL: LIBRARYC3PO_URL,
		ALL_BOOKS_URL: ALL_BOOKS_URL,
		REMOVE_BOOK : REMOVE_BOOK,
		ADD_BOOK: ADD_BOOK
	});
})();