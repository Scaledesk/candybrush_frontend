angular.module('CandyBrush').controller('AuthenticationController', function(Authentication, $scope, $location){
    //$scope.notes = Note.query();
    //$scope.search = {};
    $scope.authentication = new Authentication();

    $scope.AuthenticateUser=function(loginData)
    {
        $scope.authentication.email = loginData.email;
        $scope.authentication.password = loginData.password;
        $scope.authentication.$save(function(data){
            window.localStorage['token'] = data.token;
            console.log(window.localStorage['token']);
            $location.path("/profile");

        });
    }
});