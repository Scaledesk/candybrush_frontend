angular.module('CandyBrush').controller('BonusController', function(Bonus, $scope, $location){
    $scope.bonus = [new Bonus()];
    $scope.newRow = function()
    {
        console.log($scope.bonus);
        $scope.tmp = new Bonus();
        $scope.bonus.push($scope.tmp);
    };
    $scope.submitBonus = function()
    {
        var txt = {
            package_id : window.localStorage['package_id'],
            data : $scope.bonus
        };
        console.log(txt);
        $scope.t = new Bonus(txt);
        $scope.t.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/packages');
        });
    }
});
