'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('LoginCtrl', function ($scope, $location, Authentication) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.user = {
            userEmail: '',
            userPassword: ''
        };

        $scope.loginUser = function () {
            // this should be replaced with a call to your API for user verification (or you could also do it in the service)
            //User.authenticateUser($scope.user, function (data) {
            Authentication.login($scope.user);
            $location.path('/main');
            //});
        };
    });
