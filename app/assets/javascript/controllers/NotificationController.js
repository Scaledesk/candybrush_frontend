angular.module('NoteWrangler').controller('NotificationController', function(Notification, $scope, $location){
   // $scope.notification = Notification.get();
    $scope.nVal = new Notification();
    $scope.submitNotification = function()
    {
        console.log($scope.notification);
        $scope.nVal.$save(function(data) {
            console.log(data);
            $scope.msg = data.message;
            //$location.path('/badges');
        });
    };
});
