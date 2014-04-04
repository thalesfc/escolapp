escolaApp.controller('professorCtrl', function ($scope, Professor, Tarefas) {
  'use strict';

  $scope.tarefas = Tarefas.all();
  $scope.filtro = {};

  $scope.cadastrarTarefa = function (tarefa) {
    tarefa.execucoes = [{
      aluno: 'Adriana',
      entregou: true,
      nota: ''
    },
    {
      aluno: 'Mariana',
      entregou: true,
      nota: ''
    },
    {
      aluno: 'Pedro',
      entregou: true,
      nota: ''
    },
    {
      aluno: 'Rafael',
      entregou: true,
      nota: ''
    }
];
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
