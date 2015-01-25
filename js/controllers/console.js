angular.module('gameapi')
  .controller('ConsoleController', ['$scope', '$timeout', 'ConsoleService', function($scope, $timeout, ConsoleService) {
    $scope.console = { text: 'Loading console...' };
    
    var refreshPromise = null;
    var refresh = function () {
      // Cancel refresh promise in-case this was called manually
      if (refreshPromise) {
        $timeout.cancel(refreshPromise);
      }
      
      ConsoleService.query(function (console) {
        $scope.console = console;
        refreshPromise = $timeout(refresh, 2000);
      }, function (response) {
        $scope.console = { text: 'Unable to retrieve console information: ' + response.statusText };
        refreshPromise = $timeout(refresh, 5000);
      });
    };
    refresh();
    
    $scope.inputText = '';
    
    $scope.executeCommand = function (player) {
      ConsoleService.execute({}, { command: $scope.inputText }, function () {
        // Success
        $scope.inputText = '';
        refresh();
      }, function () {
        // Error
      });
    };
  }]);