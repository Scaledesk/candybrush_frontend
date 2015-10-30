angular.module('CandyBrush').factory('Messages', function($http) {
    return {
        // get all the Inbox Messages
        get : function() {
            return $http.get('http://localhost:8000/api/user/10/inbox');
        },
        // get all the sentbox messages
        getSent : function(){
            return $http.get('http://localhost:8000/api/user/10/sentMessages');
        },
        // sending messages
        sendMessage : function(messageData) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/messages/send',
             //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: messageData
            });
        }

        // destroy a comment
        /*destroy : function(id) {
            return $http.delete('/api/comments/' + id);
        }*/
    }

});