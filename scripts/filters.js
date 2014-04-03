escolaApp.filter('toArray', function () {
  'use strict';

  return function (obj) {
    var array = [];

    for (var key in obj) {
      if (key[0] != '$') {
        array.push(obj[key]);
      }
    }

    return array;
  };
});
