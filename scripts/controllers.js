escolaApp.controller('professorCtrl', function ($scope, Professor, Tarefas) {
  'use strict';

  $scope.tarefas = Tarefas;
  $scope.filtro = {};

  $scope.cadastrarTarefa = function (tarefa) {
    Tarefas.$add(tarefa);
    tarefa = {};
  };

  $scope.toggleOrder = function (orderBy) {
    $scope.ordenacao = (orderBy == $scope.ordenacao) ? '-' + orderBy : orderBy;
  };

  //Tarefas.$add({data: '23/01/2014', tipo: 'Para casa', turma: '8o ano', descricao: 'Para casa de trigonometria'});

//  // Initialize vars.
//  $scope.clients = [];
//  $scope.projects = [];
//
//  // Bind scope vars to Firebase.
//  Client.bind($scope, 'clients');
//  Project.bind($scope, 'projects');
//
//  // Initialize objects for new client and new project.
//  $scope.client = Client.empty();
//  $scope.project = Project.empty();
//
//  // Toggle project selection for new client.
//  $scope.toggleSelection = function toggleSelection(id) {
//    var pos = $scope.client.projects.indexOf(id);
//
//    if (pos > -1) { // Is currently selected.
//      $scope.client.projects.splice(pos, 1);
//    } else { // Is not currently selected.
//      $scope.client.projects.push(id);
//    }
//  };
//
//  $scope.addClient = function() {
//    Client.add($scope.client);
//    $scope.client = Client.empty();
//  };
//
//  $scope.removeClient = function(id) {
//    Client.remove(id);
//  };
//
//  $scope.addProject = function() {
//    Project.add($scope.project);
//    $scope.project = Project.empty();
//  };
});

escolaApp.controller('alunoCtrl', function ($scope, Aluno) {
});
