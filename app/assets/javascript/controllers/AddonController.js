angular.module('CandyBrush').controller('AddonController', function(Addon, $scope, $location){
    $scope.addons = [new Addon()];
    $scope.newRow = function()
    {
        console.log($scope.addons);
        $scope.tmp = new Addon();
        $scope.addons.push($scope.tmp);
    };
    $scope.submitAddons = function()
    {
        var txt = {
            package_id : window.localStorage['package_id'],
            data : $scope.addons
        };
        console.log(txt);
        $scope.t = new Addon(txt);
        $scope.t.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/add_bonus');
        });
    }
});