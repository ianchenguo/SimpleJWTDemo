'use strict';

/**
 * @ngdoc function
 * @name simpleJwtdemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleJwtdemoApp
 */
angular.module('simpleJwtdemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
