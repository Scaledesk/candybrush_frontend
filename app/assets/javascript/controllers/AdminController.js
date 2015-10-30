angular.module('NoteWrangler').controller('AdminController', function(Users, $scope, $location){
    $scope.users = Users.get();
    console.log($scope.users);
    $scope.ActivateUser=function()
    {

    };
    $scope.wallet=function(user_id)
    {
        console.log(user_id);
        window.localStorage['user_id']=user_id;
        $location.path("/wallet");

    };
    $scope.packages=function()
    {
        $location.path("/admin_packages");

    }
   /* $scope.getPackage = function(id){
        $location.path("/admin_package/"+id);
    };*/
});
