angular.module('NoteWrangler')
// inject the Activation service into our controller
    .controller('ForgotPasswordController', function(ForgotPassword, $http, $scope, $location) {
        $scope.loading = true;
        $scope.pass = "";
        var d = $location.search().code;
        var dt = {
            "forgot_password_code" : d
        };
        $scope.pass.forgot_password_code = d;
        ForgotPassword.validate(dt)
            .success(function(data) {
                $scope.response = data;
                console.log(data);
                $location.path('/resetPassword');
                $scope.loading = false;
            })
            .error(function(data) {
                console.log(data);
                $scope.response = data;
                $scope.loading = false;
            });
    });