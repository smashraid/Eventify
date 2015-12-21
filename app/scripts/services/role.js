'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.Role
 * @description
 * # Role
 * Service in the eventifyApp.
 */
angular.module('eventifyApp')
    .service('Role', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var adminRoles = ['admin', 'editor'];
        var otherRoles = ['user'];
        return {
            validateRoleAdmin: function (currentUser) {
                return currentUser ? _.contains(adminRoles, currentUser.role) : false;

            },
            validateRoleOther: function (currentUser) {
                return currentUser ? _.contains(otherRoles, currentUser.role) : false;
            }
        };
    });
