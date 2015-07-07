/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('JWTDemo')
    .controller('JWTDemoCtrl', JWTDemoCtrl);

  JWTDemoCtrl.$inject = ['randomUserFactory', 'userFactory'];
  function JWTDemoCtrl(randomUserFactory, userFactory) {
    var vm = this;

    var getRandomUser = function getRandomUser() {
      randomUserFactory.getUser().then(function success(response) {
        vm.randomUser = response.data;
      });
    };

    var login = function getUser(username, password) {

      var handleSuccess = function handleSuccess(response) {
        vm.user = response.data.user;
        alert(response.data.token);
      };

      var handleError = function handleError(error) {
        alert('Error: ' + error.data);
      };

      userFactory.login(username, password).then(handleSuccess, handleError);
    };

    var logout = function logout() {
      userFactory.logout();
      vm.user = null;
    };

    vm.getRandomUser = getRandomUser;
    vm.login = login;
    vm.logout = logout;

    //init
    userFactory.getUser().then(function success(response) {
      vm.user = response.data;
    });
  }

}());
