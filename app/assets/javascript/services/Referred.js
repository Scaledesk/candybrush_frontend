angular.module('CandyBrush').factory('Referred', function($http) {
    return {
        /*get : function() {
            return $http.get('http://localhost:8000/api/user/10/inbox');
        },
        */
        // referred friend
        referred : function(Data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/referral/',
                data: Data
            });
        },
        referralSignUp : function(Data, code) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8000/api/referralSignUp/'+code,
            data: Data
        });
    }

    }

});