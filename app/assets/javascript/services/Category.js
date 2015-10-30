angular.module('CandyBrush').factory('Category', function($resource){
    return $resource('http://localhost:8000/api/category/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});