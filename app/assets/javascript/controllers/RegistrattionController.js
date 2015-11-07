angular.module('CandyBrush').controller('RegistrationController', function(Registration, $scope, toaster){
    $scope.registration = new Registration();
    $scope.userRegistration = function(userData)
    {
        console.log(userData);
        $scope.registration.name = userData.name;
        $scope.registration.email = userData.email;
        $scope.registration.password = userData.password;
        $scope.registration.password_confirmation = userData.password_confirmation;
        console.log(userData);
        $scope.registration.$save(function(data){
            console.log(data);
            toaster.pop({
                type: 'success',
                title: 'You have successfully registered with zolo!',
                body: 'Go to your email account and verify to enjoy our services. ',
                showCloseButton: true
            });
                $location.path("/packages");
        },
        function(data){
                toaster.pop({
                type: 'error',
                title: 'some error occurred!',
                body: data.data.message[0],
                showCloseButton: true
            });
        });
    };
    $scope.pop = function(){
        toaster.pop('error', "title", "text");
    };
});