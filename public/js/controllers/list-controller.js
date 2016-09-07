angular.module('InstituteApp')
  .controller("ListController", function(ContactsServiceData, $scope) {
    $scope.contacts = ContactsServiceData.data;
  });
