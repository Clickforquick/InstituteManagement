angular.module("InstituteApp", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/list.html",
        controller: "ListController",
        resolve: {
          contacts: function(Contacts) {
            return Contacts.getContacts();
          }
        }
      })
      .when("/new/contact", {
        controller: "NewContactController",
        templateUrl: "../views/contact-form.html"
      })
      .when("/contact/:contactId", {
        controller: "EditContactController",
        templateUrl: "../views/contact.html"
      })
      .otherwise({
        redirectTo: "/"
      })
  })
  .service("Contacts", function($http) {
    this.getContacts = function() {
      return $http.get("/contacts").
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding contacts.");
      });
    }
    this.createContact = function(contact) {
      return $http.post("/contacts", contact).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error creating contact.");
      });
    }
    this.getContact = function(contactId) {
      var url = "/contacts/" + contactId;
      return $http.get(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error finding this contact.");
      });
    }
    this.editContact = function(contact) {
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
    this.deleteContact = function(contactId) {
      var url = "/contacts/" + contactId;
      return $http.delete(url).
      then(function(response) {
        return response;
      }, function(response) {
        alert("Error deleting this contact.");
        console.log(response);
      });
    }
  });
