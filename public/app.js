app.run(function($rootScope, $location){
    $rootScope.goTo = function(state, params){
        $location.path(state);
    };
}).config(
    function($routeProvider){
        $routeProvider.
        when('/login', {
            url: '/login',
            templateUrl: 'view/login/login.html',
            controller: 'LoginCtrl'
        }).when('/home', {
            url: '/home',
            templateUrl: 'view/home/home.html',
            controller: 'HomeCtrl'
        }).otherwise({redirectTo: '/login'});
    }
);