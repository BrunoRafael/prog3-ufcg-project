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
				success: function(response) {
					successCallback(response.data)
				},
				error: function (ex) {
					if(errorCallback){
						errorCallback(response.data)
					}
				}
			});
		}

		function save(book){
			return $http.post(URL.ADD_BOOK, {book: book});
		}

		function remove(bookId){
			return $http.delete(URL.REMOVE_BOOK, {params: {bookId: bookId}});
		}

		function update(newBook){
			return $http.put(URL.UPDATE_BOOK, {book: newBook});
		}

		function addComment(bookId, comment){

		}
	});
})();