angular.module('CandyBrush').factory('User', function($resource){
  return $resource('/users/:id');
});