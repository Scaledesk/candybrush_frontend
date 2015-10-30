angular.module('NoteWrangler').controller('TagController', function(Tags, $scope, $location ){
    $scope.tags = Tags.get();
    $scope.newTag = new Tags();
    $scope.deleteTag = function(d){
        // var record = $scope.category[idx];
        $scope.dt = new Tags(d);
        $scope.dt.$remove(function(data){
            $scope.response = data;
            $scope.category =Tags.get();
        });
    };

    $scope.addTag = function(){
        console.log($scope.newTag);
        $scope.newTag.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/tags');
        });
    }
});
