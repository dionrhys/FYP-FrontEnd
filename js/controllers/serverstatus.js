angular.module('gameapi')
  .controller('ServerStatusController', ['$scope', '$timeout', '$window', 'ServerService', function($scope, $timeout, $window, ServerService) {
    $scope.server = {};
    
    var refreshPromise = null;
    var refresh = function () {
      // Cancel refresh promise in-case this was called manually
      if (refreshPromise) {
        $timeout.cancel(refreshPromise);
      }
      
      ServerService.query(function (server) {
        $scope.server = server;
        refreshPromise = $timeout(refresh, 3000);
      }, function (response) {
        $scope.server = {};
        refreshPromise = $timeout(refresh, 7000);
      });
    };
    refresh();
    
    $scope.restart = function () {
      ServerService.restart(function () {
        // Success
        refresh();
      });
    };
    
    $scope.shutdown = function () {
      ServerService.shutdown(function () {
        // Success
        refresh();
      });
    };
    
    $scope.broadcastMessage = function () {
      var message = $window.prompt('Message to send to all players:');
      if (message === null) return;
      ServerService.broadcast({ message: message }, function () {
        // Success
        refresh();
      });
    };
    
    $scope.changeLevel = function () {
      var newLevel = $window.prompt('Enter the new level:');
      if (newLevel === null) return;
      ServerService.changeLevel({ level: newLevel }, function () {
        // Success
        refresh();
      });
    };
    
    $scope.changeGameMode = function () {
      var newGameMode = $window.prompt('Enter the new game mode:');
      if (newGameMode === null) return;
      ServerService.changeGameMode({ gameMode: newGameMode }, function () {
        // Success
        refresh();
      });
    };
  }]);