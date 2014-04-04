escolaApp.controller('professorCtrl', function ($scope, Professor, Tarefas) {
  'use strict';

  $scope.tarefas = Tarefas.all();
  $scope.filtro = {};

  $scope.cadastrarTarefa = function (tarefa) {
    tarefa.execucoes = [{
      aluno: 'Pedro',
      entregou: false,
      nota: ''
    }];
    $scope.tarefas.$add(tarefa);
    tarefa = {};
  };

  $scope.atualizarTarefa = function (id) {
    var tarefa = $scope.tarefas[id];

    Tarefas.save(id, tarefa);
  };

  $scope.toggleOrder = function (orderBy) {
    $scope.ordenacao = (orderBy == $scope.ordenacao) ? '-' + orderBy : orderBy;
  };
});

escolaApp.controller('alunoCtrl', function ($scope, Aluno) {
});
