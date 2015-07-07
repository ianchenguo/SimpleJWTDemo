/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {
  angular
    .module('templateCacheDemo')
    .controller('TemplateCacheDemoCtrl', TemplateCacheDemoCtrl);

  TemplateCacheDemoCtrl.$inject = ['$templateCache'];
  function TemplateCacheDemoCtrl($templateCache) {
    var vm = this;
    vm.user = {name: 'Chen'};

    vm.templateCacheContent = $templateCache
      .get('scripts/template-cache-demo/template-cache-demo-view.html');
  }
}());



