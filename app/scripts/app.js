'use strict';

/**
 * @ngdoc overview
 * @name simpleJwtdemoApp
 * @description
 * # simpleJwtdemoApp
 *
 * Main module of the application.
 */
angular
  .module('simpleJwtdemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'JWTDemo',
    'templateCacheDemo'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
