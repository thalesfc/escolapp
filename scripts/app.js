var escolaApp = angular.module('escolaApp', ['ngRoute', 'firebase',
                                             'ui.bootstrap']);

escolaApp.config(function($routeProvider) {
  'use strict';

  $routeProvider
    .when('/professor',{
      controller: 'professorCtrl',
      templateUrl: 'views/professor.html'
    })
    .when('/aluno',{
      controller: 'alunoCtrl',
      templateUrl: 'views/aluno.html'
    })
    .otherwise({'redirectTo': '/professor'});
});
