// angular routes 
angular.module('InstituteApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login',{
        url: "/",
        views :{ "content" :{     templateUrl: "../views/login.html",
                                  controller: "LoginController"
                            }
                }
          }
        )
      .state('home', {
        url: "/h",
        views :{ 
          "content":{   templateUrl: "../views/UsersList.html",
                        controller: "UserListController",
                        resolve: {
                            UsersServiceData: function(UsersService) {
                            return UsersService.getUsers();  }
                                  }
                    }
                }
          })
      .state('newUser', {
        url: "/new/user",
        views:{"content":{ controller: "NewUserController",
                      templateUrl: "../views/user-form.html" }  }
      })
      .state('userById', {
        url: "/user/:_id",
        views:{"content":{controller: "EditUserController",
                          templateUrl: "../views/user.html"}}        
      });

    // catch all route
    // send users to the home page
    $urlRouterProvider.otherwise('/');

  }]);
