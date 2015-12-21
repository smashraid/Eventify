'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
    .controller('NavCtrl', function ($scope, $location, Authentication, Role, Session) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.isAuthenticated = Authentication.isLoggedIn();
        $scope.currentUser = Session.currentUser;
        $scope.test = "juanfra";
        $scope.logout = function(){
            alert("Logout");
            Authentication.logout();
            $scope.isAuthenticated = false;
            $location.path('/login');
        };
        $scope.$watchCollection('isAuthenticated', function(newValue) {
            $scope.isAuthenticated = Authentication.isLoggedIn();
        });
    });
