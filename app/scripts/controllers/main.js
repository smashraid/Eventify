'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.user = "John Doe";
  });
