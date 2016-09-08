// angular routes 
angular.module('InstituteApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/list.html",
        controller: "ListController",
        resolve: {
          ContactsServiceData: function(ContactsService) {
            return ContactsService.getContacts();
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
      });

  }]);
