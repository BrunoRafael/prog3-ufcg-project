(function(){
	app.factory('BookService', function($http, URL){
		return {
			getAll : getAll,
			save: save,
			remove: remove,
			update: update,
			addComment: addComment
		}

		function getAll(successCallback, errorCallback){
			$.ajax({
				type: 'GET',
				url: URL.ALL_BOOKS_URL,
				crossDomain: true,
				dataType: 'json',
				success: function(data) {
					successCallback(data)
				},
				error: function (ex) {
					errorCallback(ex)
				}
			});
		}

		function save(book, successCallback, errorCallback){
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