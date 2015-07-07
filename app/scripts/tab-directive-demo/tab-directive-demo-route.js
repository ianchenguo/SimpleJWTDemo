/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('tabDirectiveDemo')
    .config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    $routeProvider
      .when('/tab-directive-demo', {
        controller: 'tabDirectiveDemoCtrl',
        controllerAs: 'vm',
        templateUrl: 'scripts/tab-directive-demo/tab-directive-demo-view.html'
      })
  }

}());

