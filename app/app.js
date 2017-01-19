myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function($scope) {


    $scope.myToDo = [];
    $scope.sortType = '';
    $scope.addRow = function(index) {
        $scope.myToDo.push({ task: $scope.task, class: $scope.priority });
        $scope.task = '';

    };

}]);
