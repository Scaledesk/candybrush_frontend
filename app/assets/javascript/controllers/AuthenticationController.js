angular.module('CandyBrush').controller('AuthenticationController', function(Authentication, toaster, $scope, $auth, $location){
    //$scope.notes = Note.query();
    //$scope.search = {};
    $scope.authentication = new Authentication();

    $scope.AuthenticateUser=function()
    {
        $scope.authentication.$save(function(data){
            window.localStorage['token'] = data.token;
            console.log(window.localStorage['token']);
            toaster.pop({
                type: 'success',
                title: 'You have successfullylogin with zolo!',
                body: 'Enjoy our services. ',
                showCloseButton: true
            });
            $location.path("/profile");

        }, function(error){
            toaster.pop({
                type: 'error',
                title: 'some error occurred!',
                body: 'Email or Password does not match',
                showCloseButton: true
            });
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