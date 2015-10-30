angular.module('NoteWrangler').factory('Bonus', function($resource){
    return $resource('http://localhost:8000/api/bonus')

});

