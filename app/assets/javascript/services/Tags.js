angular.module('NoteWrangler').factory('Tags', function($resource){
    return $resource('http://localhost:8000/api/tag/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});