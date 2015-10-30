angular.module('CandyBrush').factory('Badge', function($resource){
    return $resource('http://localhost:8000/api/badge/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});