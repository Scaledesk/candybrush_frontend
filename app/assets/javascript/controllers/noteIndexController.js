angular.module('CandyBrush').controller('NotesIndexController', function(Note, $scope){
  $scope.notes = Note.query();
  $scope.search = {};
});