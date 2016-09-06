angular.module('InstituteApp', [])
  .controller("ListController", function(contacts, $scope) {
    $scope.contacts = contacts.data;
  });
