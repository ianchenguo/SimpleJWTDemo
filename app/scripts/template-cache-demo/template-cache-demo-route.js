/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

angular
.module('templateCacheDemo')
.config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
  $routeProvider
    .when('/template-cache-demo', {
      controller:'TemplateCacheDemoCtrl',
      controllerAs:'vm',
      templateUrl:'scripts/template-cache-demo/template-cache-demo-view.html'
    })
}
