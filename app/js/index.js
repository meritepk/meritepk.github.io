(function() {
  'use strict';

  function WebAppConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      templateUrl : 'main.html'
    }).otherwise('/');
  }

  angular.module('WebApp', [ 'ngRoute', 'ngResource', 'ng' ])

  .config([ '$locationProvider', '$routeProvider', WebAppConfig ])

  .run(function($http, $rootScope) {
    $rootScope.user = {
      'menu' : [ {
        'title' : 'Home',
        'url' : '#!/'
      }, {
        'title' : 'Source Code',
        'url' : 'https://github.com/meritepk/meritepk.github.io'
      } ]
    };
  });

}());
