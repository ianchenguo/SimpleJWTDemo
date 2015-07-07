/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {
  angular
    .module('JWTDemo')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['authTokenFactory'];
  function authInterceptor(authTokenFactory) {

    var addtoken = function addToken(config) {
      var token = authTokenFactory.getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    };

    return {
      request: addtoken
    }
  }

}());
