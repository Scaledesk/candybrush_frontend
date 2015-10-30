angular.module('CandyBrush').factory('Wallet', function($resource){
    return $resource('http://localhost:8000/api/users/walletTransaction', null,
        {
            'update': { method:'PUT' }
        });

});
