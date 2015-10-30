angular.module('NoteWrangler').controller('PortfolioController', function(Portfolio, $scope, $location){
    $scope.Portfolio = Portfolio.get();
    $scope.nVal = new Portfolio();
    $scope.submitNotification = function()
    {
        console.log($scope.nVal);
        $scope.nVal.$save(function(data) {
            console.log(data);
            $scope.msg = data.message;
            //$location.path('/profile');
        });
    };
    $scope.$on('s3upload:success', function(event, response, url) {
        console.log(url.path);
        $scope.nVal.portfolio_file = url.path;
    });
    $scope.SubmitPortfolio = function()
    {
        $scope.nVal.user_id = $location.search().user_id;
        console.log($scope.nVal);
        $scope.nVal.$save(function(data) {
            console.log(data);
            $scope.msg = data.message;
            //$location.path('/profile');
        });
    };

});
