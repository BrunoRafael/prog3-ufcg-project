app.controller('BookCtrl', function($scope, BookService, Utils){
	function init(){
		BookService.getAll().then(function(books){
			$scope.books = books.data;
			$scope.$applyAsync();
		});
	}

	$scope.addBook = function(book){
		BookService.add(book);
	};

	$scope.removeBookCallback = function(bookId){
		for(var i in $scope.books){
			if(bookId == $scope.books[i].bookId){
				$scope.books.splice(i, 1);
			}
		}
	}

	init();
});