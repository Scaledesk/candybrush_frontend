angular.module('NoteWrangler').factory('Users', function($resource){
    return $resource('http://localhost:8000/api/users')

});
