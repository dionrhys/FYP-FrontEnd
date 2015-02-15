angular.module('gameapi')
  .factory('ServerService', ['$resource', function ($resource) {
    return $resource('api/server', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: false
      },
      
      restart: {
        method: 'POST',
        params: {},
        url: 'api/server/restart'
      },
      
      shutdown: {
        method: 'POST',
        params: {},
        url: 'api/server/shutdown'
      },
      
      broadcast: {
        method: 'POST',
        params: {},
        url: 'api/server/broadcast'
      },
      
      changeLevel: {
        method: 'POST',
        params: {},
        url: 'api/server/level'
      },
      
      changeGameMode: {
        method: 'POST',
        params: {},
        url: 'api/server/gamemode'
      }
    });
  }]);