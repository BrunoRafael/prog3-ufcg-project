(function(){
	app.factory('BookService', function($http, URL){
		return {
			getAll : getAll,
			get: get,
			add: add,
			remove: remove,
			update: update,
			addComment: addComment
		}

		function getAll(){
			return $http.get(URL.ALL_BOOKS_URL);
		}

		function get(bookId){

		}

		function add(book){

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