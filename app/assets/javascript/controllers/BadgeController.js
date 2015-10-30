angular.module('CandyBrush').controller('BadgeController', function(Badge, Packages, $scope, $location){
    $scope.badges = Badge.get();
    $scope.badge = new Badge();
    $scope.$on('s3upload:success', function(event, response, url) {
        console.log(url.path);
        $scope.badge.image_url = url.path;
    });

    $scope.submitBadge = function()
    {
        console.log($scope.badge);
        $scope.badge.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/badges');
        });
    };
    $scope.assignBadges = function()
    {
        var user_id = $location.search().user_id;
        var badge_id = $scope.badge.badge_id;
        Packages.assignBadge(user_id, badge_id)
            .success(function(data) {
               console.log(data);
                $scope.msg = data.message;
            })
            .error(function(data) {
                console.log(data);
                $scope.msg = data.message;
            });

    };

});
