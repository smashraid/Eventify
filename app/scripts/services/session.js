'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.Session
 * @description
 * # Session
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('Session', function ($window) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var r = undefined;
        var s = $window.sessionStorage.getItem("user");
        if ($window.sessionStorage.getItem("user")) {
            r = angular.fromJson(s);
        }
        return {
            currentUser: $window.sessionStorage.getItem("user") != null ? angular.fromJson(s) : null
        };
    });
