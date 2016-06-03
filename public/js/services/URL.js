(function(){
	const LIBRARYC3PO_URL= "https://prog3-ufcg-project.herokuapp.com",
		  API_URL = LIBRARYC3PO_URL + '/api',
		  BOOKS_API_URL= API_URL + '/book',
		  INDEX_API_URL= API_URL + '/',
		  REMOVE_BOOK  = BOOKS_API_URL + '/remove',
		  UPDATE_BOOK  = BOOKS_API_URL + '/update',
		  ALL_BOOKS_URL= BOOKS_API_URL+ '/library',
		  ADD_BOOK = BOOKS_API_URL + '/add',
		  ADD_COMMENT =  BOOKS_API_URL + '/addComment',
		  UPDATE_COMMENT =  BOOKS_API_URL + '/updateComment',
		  REMOVE_COMMENT =  BOOKS_API_URL + '/removeComment',
		  GET_ALL_COMMENTS = BOOKS_API_URL + '/getComments';

	app.constant("URL", {
		SERVER_URL: LIBRARYC3PO_URL,
		BOOKS_API_URL: BOOKS_API_URL,
		INDEX_API_URL: INDEX_API_URL,
		ALL_BOOKS_URL: ALL_BOOKS_URL,
		REMOVE_BOOK : REMOVE_BOOK,
		UPDATE_BOOK: UPDATE_BOOK,
		ADD_BOOK: ADD_BOOK,
		ADD_COMMENT:  ADD_COMMENT,
		UPDATE_COMMENT: UPDATE_COMMENT,
		REMOVE_COMMENT:  REMOVE_COMMENT,
		GET_ALL_COMMENTS: GET_ALL_COMMENTS
	});
})();