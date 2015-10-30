angular.module('CandyBrush').factory('Category', function($resource){
  return $resource('/categories/:id');
});