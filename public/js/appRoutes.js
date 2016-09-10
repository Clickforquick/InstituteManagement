// angular routes 
angular.module('InstituteApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "../views/UsersList.html",
        controller: "UserListController",
        resolve: {
          UsersServiceData: function(UsersService) {
            return UsersService.getUsers();
          }
        }
      })
      .state('newUser', {
        url: "/new/user",
        controller: "NewUserController",
        templateUrl: "../views/user-form.html"
      })
      .state('userById', {
        url: "/user/:_id",
        controller: "EditUserController",
        templateUrl: "../views/user.html"
      })

    // catch all route
    // send users to the home page
    $urlRouterProvider.otherwise('/');

  }]);
