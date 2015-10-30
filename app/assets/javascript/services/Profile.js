angular.module('NoteWrangler').factory('Profile', function($resource){
    return $resource('http://localhost:8000/api/userProfile/?token='+window.localStorage['token'], null,
        {
            'update': { method:'PUT' }
        });
});
