angular.module('NoteWrangler').factory('Addon', function($resource){
    return $resource('http://localhost:8000/api/addon')

});

