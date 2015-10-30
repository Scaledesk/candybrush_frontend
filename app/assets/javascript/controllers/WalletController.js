angular.module('CandyBrush').controller('WalletController', function(Wallet, $scope, $location){
    $scope.transaction = new Wallet();
    $scope.walletTransaction=function()
    {
        $scope.transaction.user_id = window.localStorage['user_id'];
        $scope.transaction.$update(function(data){
            console.log(data);
            $scope.response = data;
            $location.path("/admin");
        });
    }
});