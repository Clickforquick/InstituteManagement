angular.module('InstituteApp', [])
  .controller("EditcontactController", function($scope, $routeParams, Contacts) {
    Contacts.getContact($routeParams.contactId).then(function(doc) {
      $scope.contact = doc.data;
    }, function(response) {
      alert(response);
    });

    $scope.toggleEdit = function() {
      $scope.editMode = true;
      $scope.contactFormUrl = "../views/contact-form.html";
    }

    $scope.back = function() {
      $scope.editMode = false;
      $scope.contactFormUrl = "";
    }

    $scope.saveContact = function(contact) {
      Contacts.editContact(contact);
      $scope.editMode = false;
      $scope.contactFormUrl = "";
    }

    $scope.deleteContact = function(contactId) {
      Contacts.deleteContact(contactId);
    }
  });
