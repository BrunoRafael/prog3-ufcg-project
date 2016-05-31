(function(){
	app.factory('BookService', function($http, URL){
		return {
			getAll : getAll,
			save: save,
			remove: remove,
			update: update,
			addComment: addComment
		}

		function getAll(){
			return $http.get(URL.ALL_BOOKS_URL, {headers: {
				"Access-Control-Allow-Origin" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
				"Access-Control-Allow-Headers": "*"
			}});
		}

		function save(book){
			return $http.post(URL.ADD_BOOK, {book: book});
		}

		function remove(bookId){
			return $http.delete(URL.REMOVE_BOOK + '/' + bookId);
		}

		function update(newBook){

		}

		function addComment(bookId, comment){

		}
	});
})();