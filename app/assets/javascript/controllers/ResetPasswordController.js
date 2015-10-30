angular.module('CandyBrush')
// inject the Activation service into our controller
    .controller('ResetPasswordController', function(ForgotPassword, $http, $scope, $location) {
        $scope.loading = true;
        $scope.pass = {
            "forgot_password_code" : $location.search().code
        };
        $scope.resetPassword = function(){
            /*$scope.pass.forgot_password_code = $location.search().code;*/
            console.log($scope.pass);
            ForgotPassword.changePassword($scope.pass)
                .success(function(data) {
                    $scope.msg= "You have Successfully reset your password login again";
                    console.log(data);
                    $scope.loading = false;
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                    $scope.loading = false;
                });
        };
    });