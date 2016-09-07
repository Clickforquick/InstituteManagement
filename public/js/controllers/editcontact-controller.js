angular.module('InstituteApp')
  .controller("EditContactController", function($scope, $routeParams, ContactsService) {
    ContactsService.getContact($routeParams.contactId).then(function(doc) {
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
      ContactsService.editContact(contact);
      $scope.editMode = false;
      $scope.contactFormUrl = "";
    }

    $scope.deleteContact = function(contactId) {
      ContactsService.deleteContact(contactId);
    }
  });
