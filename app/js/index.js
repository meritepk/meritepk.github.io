(function() {
  'use strict';

  function WebAppConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      templateUrl : 'main.html'
    }).when('/quotation', {
      templateUrl : 'app/sales/quotation.html'
    }).otherwise('/');
  }

  angular.module('WebApp', [ 'ngRoute', 'ngResource', 'ng' ])

  .config([ '$locationProvider', '$routeProvider', WebAppConfig ])

  .run(function($http, $rootScope) {
    $rootScope.user = {
      'menu' : [ {
        'title' : 'Quotation',
        'url' : '#!/quotation'
      } ]
    };
  });

}());
