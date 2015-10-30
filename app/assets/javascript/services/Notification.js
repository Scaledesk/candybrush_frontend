angular.module('NoteWrangler').factory('Notification', function($resource){
    return $resource('http://localhost:8000/api/notification/:id?token='+window.localStorage['token'], {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});