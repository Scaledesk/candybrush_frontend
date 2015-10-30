angular.module('NoteWrangler').factory('Booking', function($resource){
    return $resource('http://localhost:8000/api/booking/:id', {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});