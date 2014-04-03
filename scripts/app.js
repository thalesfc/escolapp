var escolaApp = angular.module('escolaApp', []);//'ngRoute', 'firebase']);

escolaApp.config(function($routeProvider) {
  'use strict';

  $routeProvider
    .when('/professor',{
      controller: 'professorCtrl',
      templateUrl: '../views/calendar-view.html'
    })
    .when('/aluno',{
      controller: 'alunoCtrl',
      templateUrl: '../views/add-view.html'
    })
    .otherwise({'redirectTo': '/professor'});
});
