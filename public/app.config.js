var state = {
	books: {
		url: '/books',
		templateUrl: 'views/books.html',
		controller: 'BookCtrl',
		windowClass: 'center-modal'
	}, 
	counting: {
		url: '/count',
		templateUrl: 'views/templates/count.html',
		controller: 'CountCtrl'
	}
};

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	$stateProvider.
	state('/books', state.books).
	state('/count', state.counting);
	
	$urlRouterProvider.otherwise('/books');
	$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}).run(function($rootScope, $state){
	$rootScope.goTo = function (state, params) {
      $state.go(state, params);
    };
});

app.run(function($rootScope){});