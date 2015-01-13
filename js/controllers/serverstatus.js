angular.module('gameapi')
  .controller('ServerStatusController', ['$scope', 'ServerService', function($scope, ServerService) {
    $scope.server = ServerService.query();
    
    $scope.restart = function () {
      ServerService.restart();
    };
    
    $scope.shutdown = function () {
      ServerService.shutdown();
    };
  }]);