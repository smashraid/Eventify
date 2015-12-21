'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.uthentication
 * @description
 * # uthentication
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('Authentication', function ($rootScope, $window, Session) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            login: function (user) {
                // this method could be used to call the API and set the user instead of taking it in the function params
                $window.sessionStorage.setItem("user", angular.toJson(user));
                Session.currentUser = user;
            },
            isLoggedIn: function () {
                return Session.currentUser !== null;
            },
            logout: function () {
                $window.sessionStorage.removeItem("user");
            },
        };
    });
