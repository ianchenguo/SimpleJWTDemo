/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {
  angular
    .module('tabDirectiveDemo')
    .directive('gcTab', gcTab);

  function gcTab() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/tab-directive-demo/directives/tab-directive-view.html',
      transclude: true,
      scope: {heading: '@'},
      link: link,
      require: '^gcTabset'
    }
  }

  function link(scope, elem, attr, tabsetCtrl) {

    scope.active = false;
    scope.disabled = false;

    if (attr.disabled) {
      attr.$observe('disabled', function (value) {
        scope.disabled = ( value !== 'false' );
      });
    }


    //init
    tabsetCtrl.addTab(scope);
  }


}());



