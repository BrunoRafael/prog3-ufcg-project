app.controller('BookCtrl', function($rootScope, $scope, BookService){
	BookService.getAll().then(function(books){
		$scope.books = books.data;
		$scope.$applyAsync();
	});

	$scope.addBook = function(book){
		BookService.add(book);
	};

	$scope.removeBookCallback = function(bookId){
		for(var i in $scope.books){
			if(bookId == $scope.books[i].bookId){
				$scope.books.splice(i, 1);
			}
		}
	};

	$rootScope.$on('bookSaved', function(status,books){
		for(var i in books){
			$scope.books.unshift(books[i]);
		}
	});
});