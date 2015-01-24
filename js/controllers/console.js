angular.module('gameapi')
  .controller('ConsoleController', ['$scope', '$timeout', 'ConsoleService', function($scope, $timeout, ConsoleService) {
    $scope.console = { text: 'Loading console...' };
    
    $scope.inputText = '';
    
    $scope.executeCommand = function (player) {
      ConsoleService.execute({}, { command: $scope.inputText }, function () {
        // Success
        $scope.inputText = '';
        // ConsoleService.query(function (console) {
          // $scope.console = console;
        // });
      }, function () {
        // Error
      });
    };
    
    var refreshFunc = function () {
      ConsoleService.query(function (console) {
        $scope.console = console;
        $timeout(refreshFunc, 2000);
      }, function (response) {
        $scope.console = { text: 'Unable to retrieve console information: ' + response.statusText };
        $timeout(refreshFunc, 5000);
      });
    };
    refreshFunc();
  }]);