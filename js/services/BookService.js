(function(){
	app.factory('BookService', function($http, URL){
		return {
			getAllBooks : getAllBooks,
			getBook: getBook,
			addBook: addBook,
			updateBook: updateBook,
			addComment: addComment
		}

		function getAllBooks(){
			return $http.get(URL.allBooks_url);
		}

		function getBook(bookId){

		}

		function addBook(book){

		}

		function updateBook(newBook){

		}

		function addComment(bookId, comment){

		}
	});
})();