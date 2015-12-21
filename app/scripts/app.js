'use strict';

/**
 * @ngdoc overview
 * @name eventifyApp
 * @description
 * # eventifyApp
 *
 * Main module of the application.
 */
angular
    .module('eventifyApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .value('baseUrl', 'http://apiservices.sanisidrocultural.tk/api/')
    .config(function ($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'Login'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.interceptors.push('HttpSessionInterceptor');
        //$locationProvider.html5Mode(true);
    }).run(function ($rootScope, $location, Authentication, Role, Session) {
        var routesThatDontRequireAuth = ['/login', '/register'];
        var routesForAdmin = ['/admin'];
        var routeClean = function (route) {
            var r = _.indexOf(routesThatDontRequireAuth, route);
            return r === -1;
        };

        var routeAdmin = function (route) {
            return _.indexOf(routesForAdmin, route) !== -1;
        };

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            var returnUrl = $location.url();
            if (returnUrl) {
                $rootScope.$evalAsync(function () {
                    if (routeClean(returnUrl) && !Authentication.isLoggedIn()) {
                        event.preventDefault();
                        $location.path('/login');
                    } else if (routeAdmin(returnUrl) && !Role.validateRoleAdmin(Session.currentUser)) {
                        //$location.path('/error');
                    }
                });
            }
        });
    });
