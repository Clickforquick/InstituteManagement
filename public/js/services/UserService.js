angular.module('InstituteApp')
  .factory("ContactsService", ['$http', function($http) {
    var userfac = {};
    userfac.getContacts = function() {
      return $http.get("/contacts").
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding contacts.");
      });
    }
    userfac.createContact = function(contact) {
      return $http.post("/contacts", contact).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error creating contact.");
      });
    }
    userfac.getContact = function(_id) {
      var url = "/contacts/" + _id;
      return $http.get(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding this contact.");
      });
    }
    userfac.editContact = function(contact) {
      var url = "/contacts/" + contact._id;
      console.log(contact._id);
      return $http.put(url, contact).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error editing this contact.");
        console.log(response);
      });
    }
    userfac.deleteContact = function(_id) {
      var url = "/contacts/" + _id;
      return $http.delete(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error deleting this contact.");
        console.log(response);
      });
    };

    return userfac;
  }]);
