angular.module('CandyBrush').factory('Commission', function($resource){
    return $resource('http://localhost:8000/api/commission')
});

