angular.module('CandyBrush')
// inject the Activation service into our controller
    .controller('ActivateController', function(Activate, toaster, $http, $scope, $location) {
        var d = $location.search().code;
        console.log(d);
        Activate.activate(d)
            .success(function(data) {
                console.log(data);
                toaster.pop({
                    type: 'success',
                    title: 'You have successfully activated your email!',
                    body: 'Enjoy our services. ',
                    showCloseButton: true
                });
                $location.path("/packages");
            })
            .error(function(data) {
                console.log(data);
                toaster.pop({
                    type: 'error',
                    title: 'some error occurred!',
                    body: 'your email not activated some error occurred!',
                    showCloseButton: true
                });
                $location.path("/packages");

            });
    });