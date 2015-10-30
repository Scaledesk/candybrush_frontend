angular.module('NoteWrangler').controller('UsersProfileController', function(Profile, Notification, Portfolio, $scope){
    $scope.profile = Profile.get();
    $scope.portfolio = Portfolio.get();
    $scope.notification = Notification.get();
    $scope.profileImage = new Profile();
    $scope.updateUser=function(userData)
    {
        console.log(userData);
        $scope.profileData = new Profile(userData);
        $scope.profileData.$update(function(response){
            $scope.response = response;
            console.log(response);
        });
    };
    $scope.$on('s3upload:success', function(event, response, url) {
        console.log(url.path);
        $scope.profileImage.image = url.path;
    });
    $scope.uploadImage=function()
    {
        $scope.profileImage.$update(function(response){
            $scope.msg = 'You have Successfully uploaded your image';
            console.log(response);
        });
    }
});
