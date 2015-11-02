angular.module('CandyBrush').controller('UsersProfileController', function(Profile, Notification, Portfolio, Referred, $scope){
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
    };

    $scope.referredFriend = function(dt) {
        $scope.loading = true;
        $scope.referred ={
           user_id : $scope.profile.data.user_id,
            referred_user_email: dt.email
        };
        console.log($scope.referred);
        Referred.referred($scope.referred)
            .success(function(data) {
                // if successful
                console.log(data);
                $scope.response = data;
            })
            .error(function(data) {
                console.log(data);
                $scope.response = data;
            });
    };

});
