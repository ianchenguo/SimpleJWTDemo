/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';
angular
.module('JWTDemo')
.config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
  $routeProvider.when('/jwt-demo', {
    templateUrl: 'scripts/JWT-demo/JWT-demo-view.html',
    controller: 'JWTDemoCtrl',
    controllerAs: 'vm'
  })
}
