angular.module('CandyBrush')
// inject the Activation service into our controller
    .controller('ActivateController', function(Activate, $http, $scope, $location) {
        $scope.loading = true;
        var d = $location.search().code;
        console.log(d);
        Activate.activate(d)
            .success(function(data) {
                $scope.response = data;
                console.log(data);
                $scope.loading = false;
            })
            .error(function(data) {
                console.log(data);
                $scope.response = data;
                $scope.loading = false;
            });
    });