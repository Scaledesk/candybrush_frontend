

angular.module('CandyBrush').factory('User_Profile', function($resource){
    return $resource('http://localhost:8000/api/userProfile/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});
