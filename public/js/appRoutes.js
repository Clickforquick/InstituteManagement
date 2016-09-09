// angular routes 
angular.module('InstituteApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "../views/list.html",
        controller: "ListController",
        resolve: {
          ContactsServiceData: function(ContactsService) {
            return ContactsService.getContacts();
          }
        }
      })
      .state('newContact', {
        url: "/new/contact",
        controller: "NewContactController",
        templateUrl: "../views/contact-form.html"
      })
      .state('contactById', {
        url: "/contact/:contactId",
        controller: "EditContactController",
        templateUrl: "../views/contact.html"
      })

    // catch all route
    // send users to the home page
    $urlRouterProvider.otherwise('/');

  }]);
