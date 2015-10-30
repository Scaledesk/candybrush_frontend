angular.module('CandyBrush').controller('UsersIndexController', function(User, $scope){
  $scope.users = User.query();
});