angular.module('gameapi')
  .controller('PlayersController', ['$scope', 'PlayersService', function($scope, PlayersService) {
    $scope.players = PlayersService.query();
    
    $scope.sendMessage = function (player) {
      PlayersService.sendMessage({ playerID: player.id }, { message: 'Testing!' });
    };
    
    $scope.kick = function (player) {
      PlayersService.kick({ playerID: player.id }, { message: 'Kicked!' });
    };
    
    $scope.ban = function (player) {
      PlayersService.ban({ playerID: player.id }, { message: 'Banned!' });
    };
  }]);