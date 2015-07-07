/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('JWTDemo', [], config)
    .constant('API_URL', 'http://localhost:3000');

  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }

}());
