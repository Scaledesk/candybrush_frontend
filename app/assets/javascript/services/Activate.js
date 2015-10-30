angular.module('NoteWrangler').factory('Activate', function($http) {
    return {
        // get all the Inbox Messages
        activate : function(data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/users/activate/?confirmation_code='+ data
            });
        }

    }
});