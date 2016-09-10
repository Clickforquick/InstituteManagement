angular.module('InstituteApp')
  .controller("UserListController", function(UsersServiceData, $scope) {
    $scope.users = UsersServiceData.data;
  })
  .controller("NewUserController", function($scope, $location, UsersService) {
    $scope.back = function() {
      $location.path("#/");
    }

    $scope.saveUser = function(user) {
      UsersService.createUser(user).then(function(doc) {
        var userUrl = "/user/" + doc.data._id;
        $location.path(userUrl);
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
