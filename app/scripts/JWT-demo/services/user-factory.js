/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('JWTDemo')
    .factory('userFactory', userFactory);

  userFactory.$inject = ['$q', '$http', 'API_URL', 'authTokenFactory'];
  function userFactory($q, $http, API_URL, authTokenFactory) {

    var login = function getUser(username, password) {
      return $http.post(API_URL + '/login', {
        username: username,
        password: password
      })
        .then(function success(response) {
          authTokenFactory.setToken(response.data.token);
          return response;
        })
    };

    var logout = function logout() {
      authTokenFactory.setToken();
    };

    var getUser = function getUser() {
      if (authTokenFactory.getToken()) {
        return $http.get(API_URL + '/me');
      } else {
        return $q.reject({data: 'client has no auth token'});
      }
    };
    return {
      login: login,
      logout: logout,
      getUser: getUser
    }
  }


}());
