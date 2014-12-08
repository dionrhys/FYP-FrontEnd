angular.module('gameapi', ['ngResource'])
  .factory('PlayersService', ['$resource', function ($resource) {
    return $resource('api/players', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      
      sendMessage: {
        method: 'POST',
        url: 'api/players/:playerID/message',
        params: { playerID: '@playerID' }
      },
      
      kick: {
        method: 'POST',
        url: 'api/players/:playerID/kick',
        params: { playerID: '@playerID' }
      },
      
      ban: {
        method: 'POST',
        url: 'api/players/:playerID/kick',
        params: { playerID: '@playerID' }
      }
    });
  }]);