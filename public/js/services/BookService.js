(function(){
	app.factory('BookService', function($http, URL){
		return {
			getAll : getAll,
			save: save,
			remove: remove,
			update: update,
			addComment: addComment,
			getAllComments: getAllComments
		};

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

		function save(newBook){
			delete newBook.comments;
			return $http.post(URL.ADD_BOOK, {book: newBook});
		}

		function remove(bookId){
			return $http.delete(URL.REMOVE_BOOK, {params: {bookId: bookId}});
		}

		function update(newBook){
			delete newBook.comments;
			return $http.put(URL.UPDATE_BOOK, {book: newBook});
		}

		function updateComment(bookId, comment){
			return $http.put(URL.ADD_COMMENT, {bookId: bookId, comment: comment});
		}

		function removeComment(bookId, comment){
			return $http.delete(URL.ADD_COMMENT, {bookId: bookId, comment: comment});
		}

		function addComment(comment){
			return $http.post(URL.ADD_COMMENT, {comment: comment});
		}

		function getAllComments(bookId){
			return $http.get(URL.GET_ALL_COMMENTS, {params: {bookId: bookId}});
		}
	});
})();