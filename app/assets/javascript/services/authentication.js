angular.module('NoteWrangler').factory('Authentication', function($resource){
  return $resource('http://localhost:8000/api/auth/login');
});