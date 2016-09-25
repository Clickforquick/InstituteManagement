angular.module('InstituteApp')
 .controller("LoginController", function($scope,$location,$state,$stateParams,$cookies,UsersService) {
     $scope.loginUser = function(user) {
      UsersService.loginUser(user).then(function(doc) {
        $cookies.put('token',doc.data.token);
        $cookies.put('role',doc.data.role);
        if ($cookies.get('role')=="cat") {$state.go("newUser");}       
      }, function(response) {
        alert(response);
      });
    } 
  })
   .controller("UserListController", function(UsersServiceData, $scope) {
    $scope.users = UsersServiceData.data;
  })
  .controller("NewUserController", function($scope, $location, UsersService) {
    $scope.back = function() {
      $location.path("#/");
    }

    $scope.saveUser = function(user) {
      UsersService.createUser(user).then(function(doc) {
        $scope.rs = doc;       
      }, function(response) {
        alert(response);
      });
    }
  })
  .controller("EditUserController", function($scope, $stateParams, UsersService) {
    UsersService.getUser($stateParams._id).then(function(doc) {
      $scope.user = doc.data;
    }, function(response) {
      alert(response);
    });

    $scope.toggleEdit = function() {
      $scope.editMode = true;
      $scope.userFormUrl = "../views/user-form.html";
    }

    $scope.back = function() {
      $scope.editMode = false;
      $scope.userFormUrl = "";
    }

    $scope.saveUser = function(user) {
      UsersService.editUser(user);
      $scope.editMode = false;
      $scope.userFormUrl = "";
    }

    $scope.deleteUser = function(_id) {
      UsersService.deleteUser(_id);
    }
  });
