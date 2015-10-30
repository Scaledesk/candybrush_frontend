angular.module('CandyBrush').factory('Package', function($resource){
    return $resource('http://localhost:8000/api/package/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});