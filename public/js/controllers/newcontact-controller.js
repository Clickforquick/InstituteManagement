angular.module('InstituteApp')
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
