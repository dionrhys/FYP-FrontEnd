angular.module('gameapi', ['ngResource', 'luegg.directives'])
  .filter('duration', function () {
    return function(input) {
      return input ? moment.duration(input, 'seconds').humanize() : 'N/A';
    };
  });