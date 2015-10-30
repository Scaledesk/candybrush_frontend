angular.module('NoteWrangler').factory('Portfolio', function($resource){
    return $resource('http://localhost:8000/api/userPortfolio/:id?token='+window.localStorage['token'], {id: "@id"}, {
        update: {
            method: "PUT"
        }
    });
});