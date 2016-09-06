// angular routes 

// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  // home page
    .when('/', {
    templateUrl: 'index.html',
    controller: 'MainController'
  })

  // users page that will use the NerdController
  .when('/users', {
    templateUrl: 'views/users.html',
    controller: 'UserController'
  });

  $locationProvider.html5Mode(true);

}]);
