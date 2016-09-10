angular.module('InstituteApp')
  .controller("ListController", function(ContactsServiceData, $scope) {
    $scope.contacts = ContactsServiceData.data;
  })
  .controller("NewContactController", function($scope, $location, ContactsService) {
    $scope.back = function() {
      $location.path("#/");
    }

    $scope.saveContact = function(contact) {
      ContactsService.createContact(contact).then(function(doc) {
        var contactUrl = "/contact/" + doc.data._id;
        $location.path(contactUrl);
      }, function(response) {
        alert(response);
      });
    }
  })
  .controller("EditContactController", function($scope, $stateParams, ContactsService) {
    ContactsService.getContact($stateParams._id).then(function(doc) {
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

    $scope.deleteContact = function(_id) {
      ContactsService.deleteContact(_id);
    }
  });
