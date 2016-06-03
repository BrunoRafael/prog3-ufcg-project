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

	$rootScope.$on('bookSaved', function(status,json){
		for(var i in json) {
			$scope.books.unshift(json[i].data);
		}
	});

	$rootScope.$on('bookUpdated', function(status, array){
		for(var i in array){
			for(var j in $scope.books){
				if(array[i].data._id == $scope.books[j]._id) {
					$scope.books[j] = array[i].data;
					$scope.$applyAsync();
				}
			}

		}
	});
});