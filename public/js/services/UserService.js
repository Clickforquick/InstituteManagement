angular.module('InstituteApp')
  .factory("UsersService", ['$http', function($http) {
    var userfac = {};
    userfac.getUsers = function() {
      return $http.get("/users").
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding users.");
      });
    }
    userfac.createUser = function(user) {
      return $http.post("/users", user).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error creating user.");
      });
    }
    userfac.getUser = function(_id) {
      var url = "/users/" + _id;
      return $http.get(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding this user.");
      });
    }
    userfac.editUser = function(user) {
      var url = "/users/" + user._id;
      console.log(user._id);
      return $http.put(url, user).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error editing this user.");
        console.log(response);
      });
    }
    userfac.deleteUser = function(_id) {
      var url = "/users/" + _id;
      return $http.delete(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error deleting this user.");
        console.log(response);
      });
    };

    return userfac;
  }]);
