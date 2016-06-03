app.controller('BookCtrl', function($rootScope, $scope, BookService){
	BookService.getAll(function(books){
		$scope.books = books;
		$scope.$applyAsync();
	});

	$scope.addBook = function(book){
		BookService.add(book);
	};

	$scope.removeBookCallback = function(book){
		for(var i in $scope.books){
			if(book._id == $scope.books[i]._id){
				$scope.books.splice(i, 1);
				$scope.$applyAsync();
				break;
			}
		}
	};

	$rootScope.$on('bookSaved', function(status,books){
		for(var i in books){
			$scope.books.unshift(books[i]);
		}
	});
});