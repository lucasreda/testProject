var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {	
    $routeProvider

        // rotas da nossa SPA

        // route home page
        .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'homeController'
        })

        // route about page
        .when('/sobre', {
            templateUrl : 'app/views/sobre.html',
            controller  : 'homeController'
        })

       
        .otherwise({
		    redirectTo: "/"
		});
});