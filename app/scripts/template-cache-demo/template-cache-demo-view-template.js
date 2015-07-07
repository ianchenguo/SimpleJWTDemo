/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('templateCacheDemo')
    .run(putTemplate);

  putTemplate.$inject = ['$templateCache'];
  function putTemplate($templateCache) {
    $templateCache.put(
      'scripts/template-cache-demo/template-cache-demo-view.html',
      '<h1>Template Cache Demo</h1>' +
      '<p>Hello {{vm.user.name}}</p>' +
      '<div>' +
      '<h1>Template Cache Content</h1>' +
      '<pre>' +
      '{{vm.templateCacheContent}}' +
      '</pre>' +
      '</div>'
    )
  }

}());
