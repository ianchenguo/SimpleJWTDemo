/**
 * Created by ianchenguo on 7/07/15.
 */

'use strict';
(function () {
  angular
    .module('JWTDemo')
    .factory('randomUserFactory', randomUserFactory);

  randomUserFactory.$inject = ['$http', 'API_URL'];
  function randomUserFactory($http, API_URL) {

    var getUser = function getUser() {
      return $http.get(API_URL + '/random-user');
    };

    return {
      getUser: getUser
    }
  }

}());

