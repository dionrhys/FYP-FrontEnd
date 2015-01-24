angular.module('gameapi')
  .factory('ConsoleService', ['$resource', function ($resource) {
    return $resource('api/console', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: false
      },
      
      execute: {
        method: 'POST',
        params: {}
      }
    });
  }]);