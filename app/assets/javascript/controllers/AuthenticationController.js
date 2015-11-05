angular.module('CandyBrush').controller('AuthenticationController', function(Authentication, $scope, $auth, $location){
    //$scope.notes = Note.query();
    //$scope.search = {};
    $scope.authentication = new Authentication();

    $scope.AuthenticateUser=function()
    {
        $scope.authentication.$save(function(data){
            window.localStorage['token'] = data.token;
            console.log(window.localStorage['token']);
            $location.path("/profile");

        }, function(error){
            $scope.msg = "email or password do not match";
        });
    };
     $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
         /*success(data){
             window.localStorage['token'] = data.token;
             console.log(window.localStorage['token']);
             $location.path("/profile");
         }*/

         //console.log("ok");
    };
});