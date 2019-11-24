/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('CyBorgBackup.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
