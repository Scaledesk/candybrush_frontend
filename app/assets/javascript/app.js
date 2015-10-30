angular.module('CandyBrush', ['ngRoute', 'ngResource', 'ngS3upload', "ngGravatar", "directives.customvalidation.customValidationTypes"]).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});
/*
function(ngS3Config) {
  ngS3Config.theme = 'bootstrap3';
}*/
