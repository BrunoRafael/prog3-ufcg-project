var states = {
	books: {
		templateUrl: 'views/books.html',
		controller: 'BookController as bookCtrl',
	}
};

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/books', states.books).
	otherwise({redirectTo:'/books'});
}]);

app.run(function($rootScope){});