escolaApp.factory('Professor' , ['$firebase', function ($firebase) {
  'use strict';

  var _url = 'https://blistering-fire-4654.firebaseio.com/professor',
      _ref = new Firebase(_url);

  return {
    all: function() {
      return $firebase(_ref);
    },

    save: function(id, obj) {
      var itemRef = new Firebase(_ref + '/' + id);

      itemRef.update(obj);
    }
  };
}]);

escolaApp.factory('Tarefas' , ['$firebase', function ($firebase) {
  'use strict';

  var _url = 'https://blistering-fire-4654.firebaseio.com/tarefas',
      _ref = new Firebase(_url);

  return {
    all: function() {
      return $firebase(_ref);
    },

    save: function(id, obj) {
      var itemRef = new Firebase(_ref + '/' + id);

      obj = angular.copy(obj);
      delete obj.id;

      itemRef.update(obj);
    },

    remove: function(id) {
      var itemRef = new Firebase(_ref + '/' + id);

      itemRef.remove();
    }
  };
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
