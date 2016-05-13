app.controller('BookController', function($scope, BookService, Utils){
	function init(){
		BookService.getAllBooks().then(function(books){
			$scope.books = books.data;
		});
	}

	$scope.addBook = function(book){
		BookService.addBook(book);
	};

	$scope.removeBook = function(){

	};

	init();
});