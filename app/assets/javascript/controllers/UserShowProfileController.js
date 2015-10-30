angular.module('CandyBrush').controller('UsersProfileController', function(User_Profile, $scope, $routeParams){
    $scope.profile = User_Profile.get({id: $routeParams.id});
});
