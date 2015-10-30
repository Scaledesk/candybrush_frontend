angular.module('CandyBrush').controller('BookingController', function(Package, Booking, $scope, $routeParams, $location){
    $scope.package = Package.get({id: $routeParams.id});
    $scope.newBooking = new Booking();
    $scope.orderBooking = function(id){
        console.log($scope.newBooking);
        $scope.newBooking.package_id = id;
        $scope.newBooking.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/packages');
        });
    }
});
