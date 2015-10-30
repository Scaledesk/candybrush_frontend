angular.module('CandyBrush')
// inject the Activation service into our controller
    .controller('SendResetPasswordMail', function(ForgotPassword, $http, $scope) {
        $scope.loading = true;
        $scope.dt = "";
        $scope.sendResetMail = function(){
            console.log($scope.dt);
            ForgotPassword.sendMail($scope.dt)
                .success(function(data) {
                    $scope.msg= "Password Reset link send to your email check mail and reset password";
                    console.log(data);
                    $scope.loading = false;
                })
                .error(function(data) {
                    console.log(data);
                    $scope.msg = data.message;
                    $scope.loading = false;
                });
        };
    });