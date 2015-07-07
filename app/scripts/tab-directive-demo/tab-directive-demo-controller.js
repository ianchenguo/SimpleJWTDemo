/**
 * Created by ianchenguo on 7/07/15.
 */
'use strict';

(function () {

  angular
    .module('tabDirectiveDemo')
    .controller('tabDirectiveDemoCtrl', tabDirectiveDemoCtrl);

  function tabDirectiveDemoCtrl() {
    var vm = this;
    vm.test = 'from outer';

  }

}());


