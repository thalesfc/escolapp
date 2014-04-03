escolaApp.factory('Professor' , ['$firebase', function ($firebase) {
  'use strict';

  var _url = 'https://blistering-fire-4654.firebaseio.com/professor',
      _ref = new Firebase(_url);

  return $firebase(_ref);
}]);

escolaApp.factory('Tarefas' , ['$firebase', function ($firebase) {
  'use strict';

  var _url = 'https://blistering-fire-4654.firebaseio.com/tarefas',
      _ref = new Firebase(_url);

  return $firebase(_ref);
}]);

escolaApp.factory('Aluno' , ['angularFire', function (angularFire) {
  'use strict';

  var _url = 'https://blistering-fire-4654.firebaseio.com/aluno',
      _ref = new Firebase(_url);

  return {
    empty: function () {
      return {
      };
    },

    bind: function(scope, localScopeVarName) {
      angularFire(_ref, scope, localScopeVarName);
    },

    add: function(item) {
      _ref.push(item);
    },

    removeAll: function() {
      _ref.remove();
    },

    remove: function(id) {
      var itemRef = new Firebase(_url + '/' + id);

      itemRef.remove();
    }
  };
}]);
