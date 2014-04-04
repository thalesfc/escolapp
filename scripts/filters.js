escolaApp.filter('toArray', function () {
  'use strict';

  return function (obj) {
    var array = [];

    for (var key in obj) {
      if (key[0] != '$') {
        obj[key].id = key;

        array.push(obj[key]);
      }
    }

    return array;
  };
});
