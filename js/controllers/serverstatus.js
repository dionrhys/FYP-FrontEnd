angular.module('gameapi')
  .controller('ServerStatusController', ['$scope', '$timeout', 'ServerService', function($scope, $timeout, ServerService) {
    $scope.server = {};
    
    $scope.restart = function () {
      ServerService.restart();
    };
    
    $scope.shutdown = function () {
      ServerService.shutdown();
    };
    
    var refreshFunc = function () {
      ServerService.query(function (server) {
        $scope.server = server;
        $timeout(refreshFunc, 3000);
      }, function (response) {
        $scope.server = {};
        $timeout(refreshFunc, 7000);
      });
    };
    refreshFunc();
  }]);