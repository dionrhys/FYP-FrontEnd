angular.module('gameapi', ['ngResource', 'luegg.directives'])
  .filter('duration', function () {
    return function(input) {
      return moment.duration(input, 'seconds').humanize();
    };
  });