angular.module('NoteWrangler').controller('RegistrationController', function(Registration, $scope){
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
            $scope.response = data;
        });
    }
});