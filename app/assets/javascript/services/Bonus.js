angular.module('CandyBrush').factory('Bonus', function($resource){
    return $resource('http://localhost:8000/api/bonus')

});

