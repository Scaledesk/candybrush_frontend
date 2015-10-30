angular.module('NoteWrangler').factory('Commission', function($resource){
    return $resource('http://localhost:8000/api/commission')
});

