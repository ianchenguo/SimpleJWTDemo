/**
 * Created by ianchenguo on 7/07/15.
 */

'use strict';

(function () {
  angular
    .module('tabDirectiveDemo')
    .directive('gcTabset', gcTabset);

  function gcTabset() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/tab-directive-demo/directives/tabset-directive-view.html',
      bindToController: true,
      controllerAs: 'vm',
      controller: controller,
      transclude: true,
      scope: {
        type: '@',
        justified:'@',
        vertical:'@'
      }
    };
  }

  function controller() {
    var vm = this;
    vm.tabs = [];
    vm.classes = {};

    vm.addTab = function (tab) {
      vm.tabs.push(tab);
      if (vm.tabs.length === 1) {
        tab.active = true;
      }
    };

    vm.selectTab = function (tab) {

      if (tab.disabled) {
        return;
      }

      vm.tabs.forEach(function (t) {
        if (t.active && t !== tab) {
          t.active = false;
        }
      });

      tab.active = true;
    };

    //init
    if(vm.type === 'pills') {
      vm.classes['nav-pills'] = true;
    } else {
      vm.classes['nav-tabs'] = true;
    }

    if(vm.justified) {
      vm.classes['nav-justified'] = true;
    }

    if(vm.vertical) {
      vm.classes['nav-stacked'] = true;
    }
  }

}());
