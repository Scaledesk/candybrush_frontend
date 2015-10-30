angular.module('CandyBrush').factory('Addon', function($resource){
    return $resource('http://localhost:8000/api/addon')

});

