angular.module('CandyBrush').controller('CommissionController', function(Commission, $scope, $location){
    $scope.commission = Commission.get();
    $scope.newCommission = new Commission();
    $scope.saveCommission = function(){
        $scope.newCommission.user_id = $location.search().user_id;
        $scope.newCommission.$save(function(data) {
            $scope.msg = "you have successfully added commission";
            $location.path('/commission');
        });
    }
});
