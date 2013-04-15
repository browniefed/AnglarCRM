'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
}

function IndexUserCtrl($scope, $http)
{
  $http.get('/users').success(function(data, status, headers, config){
    $scope.users = data.users;
  });
}

function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function AddUserCtrl($scope, $http, $location)
{
  $scope.form = {};
  $scope.submitUser = function() {
    $http.post('/users/addUser', $scope.form).success(function(data) {
      $location.path('/usersIndex');
    });
  }
}

function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

function ViewUserCtrl($scope, $http, $routeParams)
{
  $http.get('/users/viewUser/' + $routeParams.id).success(function(data) {
    $scope.user = data.user;
  });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function EditUserCtrl($scope, $http, $location, $routeParams)
{
  $scope.form = {};
  $http.get('/users/viewUser/' + $routeParams.id).success(function(data) {
    $scope.form = data.user;
  });

  $scope.editUser = function() {
    $http.put('/users/editUser/' + $routeParams.id, $scope.form).success(function(data){
      $location.url('/viewUser/' + $routeParams.id);
    });
  }
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}

function DeleteUserCtrl($scope, $http, $location, $routeParams)
{
  $http.get('/users/viewUser/' + $routeParams.id).success(function(data) {
    $scope.user = data.user;
  });
  $scope.deleteUser = function() {
    $http.delete('/users/deleteUser/' + $routeParams.id).success(function(data){
      $location.url('/usersIndex');
    })
  };

  $scope.userHome = function() {
    $location.url('/usersIndex');
  }
}



function userData($scope, $http)
{
  $http.get('/user').success(function(data) {
    $scope.username = data.user.username;
  });
}