angular.module('NoteWrangler').controller('CategoryController', function(Category, $scope, $location ){
    $scope.category = Category.get();
    $scope.newCategory = new Category();
    $scope.deleteCategory = function(d){
       // var record = $scope.category[idx];
 $scope.dt = new Category(d);
        $scope.dt.$remove(function(data){
            $scope.response = data;
            $scope.category = Category.get();
        });
    };

    $scope.addCategory = function(){
        console.log($scope.newCategory);
        $scope.newCategory.$save(function(data) {
            console.log(data);
            $scope.response = data;
            $location.path('/category');
        });
    }
});
