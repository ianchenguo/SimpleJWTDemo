/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function(){
  angular
    .module('JWTDemo')
    .factory('authTokenFactory', authTokenFactory);

  authTokenFactory.$inject = ['$window'];
  function authTokenFactory($window) {
    var store = $window.localStorage;
    var key = 'auth-token';

    var getToken = function getToken() {
      return store.getItem(key);
    };

    var setToken = function setToken(token) {
      if (token) {
        store.setItem(key,token);
      } else {
        store.removeItem(key);
      }
    };

    return {
      getToken: getToken,
      setToken: setToken
    }
  }
}());


