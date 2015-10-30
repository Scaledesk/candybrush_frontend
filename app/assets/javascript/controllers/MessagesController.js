 angular.module('CandyBrush')
// inject the Messages service into our controller
    .controller('MessagesController', function(Messages, $http, $scope) {
        // loading variable to show the spinning loading icon
        $scope.loading = true;
        // get all the Messages first and bind it to the $scope.inbox object
        // use the function we created in our service
         Messages.get()
            .success(function(data) {
                $scope.inbox = data;
                 //console.log(data);
                 $scope.loading = false;
            });
        // get all sent messages and hold in to sentBox
         Messages.getSent()
             .success(function(data) {
                 $scope.sentBox = data;
                 //console.log(data);
                 $scope.loading = false;
             });
         $scope.sendMessage = function(messageData) {
            $scope.loading = true;
             var text = {
                 "user_id": messageData.user_id,
                 "subject" : messageData.subject,
                 "body" : messageData.body,
                 "receivers_id" : [messageData.receivers_id]
             };
            // use the function we created in our service
            console.log(angular.toJson(text, 2));
             Messages.sendMessage(angular.toJson(text, 2))
                .success(function(data) {
                    // if successful
                    $scope.response = data;
                })
                .error(function(data) {
                    console.log(data);
                });
        };
    });