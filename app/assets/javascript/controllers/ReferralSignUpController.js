angular.module('CandyBrush').controller('ReferralSignUpController', function(Referred, $scope, $location){
    $scope.nVal = "";
    $scope.referralSignUp = function()
    {
        var code = $location.search().code;
        console.log($scope.nVal);
        Referred.referralSignUp($scope.nVal, code)
            .success(function(data) {
                console.log(data);
                $scope.msg = data.message;
            })
            .error(function(data) {
                console.log(data);
                $scope.msg = data.message;
            });
    };

});
