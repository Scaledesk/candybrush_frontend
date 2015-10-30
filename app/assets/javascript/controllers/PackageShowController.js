angular.module('CandyBrush').controller('PackageShowController', function(Package, Packages, $scope, $routeParams, $location){
    $scope.package = Package.get({id: $routeParams.id});
    $scope.deletePackage = function(p){
        Packages.adminDeletePackage(p)
            .success(function(data) {
                // if successful
                console.log(data);
                $scope.response = data;
                $location.path('/admin_packages');
            })
            .error(function(data) {
                console.log(data);
                $scope.response = data;
            });

    }
});
