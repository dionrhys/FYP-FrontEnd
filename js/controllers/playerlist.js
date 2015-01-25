angular.module('gameapi')
  .controller('PlayerListController', ['$scope', '$timeout', 'PlayersService', function($scope, $timeout, PlayersService) {
    $scope.players = [];
    
    var refreshPromise = null;
    var refresh = function () {
      // Cancel refresh promise in-case this was called manually
      if (refreshPromise) {
        $timeout.cancel(refreshPromise);
      }
      
      PlayersService.query(function (players) {
        $scope.players = players;
        refreshPromise = $timeout(refresh, 3000);
      }, function (response) {
        $scope.players = [];
        refreshPromise = $timeout(refresh, 7000);
      });
    };
    refresh();
    
    $scope.sendMessage = function (player, message) {
      PlayersService.sendMessage({ playerID: player.id }, { message: message }, function () {
        // Success
        refresh();
      });
    };
    
    $scope.kick = function (player) {
      PlayersService.kick({ playerID: player.id }, { message: 'Kicked!' }, function () {
        // Success
        refresh();
      });
    };
    
    $scope.ban = function (player) {
      PlayersService.ban({ playerID: player.id }, { message: 'Banned!' }, function () {
        // Success
        refresh();
      });
    };
  }]);