'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {    
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
      }).
      when('/usersIndex', {
        templateUrl: 'partials/indexUser',
        controller: IndexUserCtrl
      }).
      when('/addUser', {
        templateUrl: 'partials/addUser',
        controller: AddUserCtrl
      }).
      when('/viewUser/:id', {
        templateUrl: 'partials/viewUser',
        controller: ViewUserCtrl
      }).
      when('/editUser/:id', {
        templateUrl: 'partials/editUser',
        controller: EditUserCtrl
      }).
      when('/deleteUser/:id', {
        templateUrl: 'partials/deleteUser',
        controller: DeleteUserCtrl
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);


    var interceptor = ['$q', '$location', '$rootScope', function ($q, $location, $rootScope) {
        function success(response) {
            return response;
        }

        function error(response) {
            var status = response.status;
            if (status == 401) {
                $rootScope.redirect = $location.url(); // save the current url so we can redirect the user back
                $rootScope.user = {}
                $location.path('/login');
            }
            return $q.reject(response);
        }

        return function (promise) {
            return promise.then(success, error);
        }
    }];
    $httpProvider.responseInterceptors.push(interceptor);

    }])
    .run(function ($rootScope, $http, $location, $route, $window) {

        //global object representing the user who is logged in
        $rootScope.user = {};
        //as the app spins up, let's check to see if we have an active session with the server
        $http.get('/user')
            .success(function (data) {
                $rootScope.user.username = data.username;
            })
            .error(function (data) {
            });

        //global function for logging out a user
        $rootScope.logout = function () {
            $rootScope.user = {}
            $http.get('/logout', {}).success(function(data){
                  $location.path('/login');
                  $window.location.reload();
            });

        }

    });