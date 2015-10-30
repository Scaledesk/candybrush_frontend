angular.module('NoteWrangler').factory('ForgotPassword', function($http) {
    return {
        // validate forgot password code
        validate : function(d) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/users/validateForgotPasswordCode/',
                data: d
            });
        },
        // reset password
        changePassword : function(dt) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/users/resetPassword/',
                data: dt
            });
        },
        sendMail : function(dt) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/users/forgotPassword/',
                data: dt
            });
        }

    }
});