'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.HttpSessionInterceptor
 * @description
 * # HttpSessionInterceptor
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('HttpSessionInterceptor', function ($q, $location, $window, $rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            response: function (response) {
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401", rejection);
                    $location.path('/login').search('returnTo', $location.path());
                }
                return $q.reject(rejection);
            }
        }
    });
