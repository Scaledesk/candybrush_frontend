angular.module('CandyBrush').factory('Registration', function($resource){
    return $resource('http://localhost:8000/api/signup');
});