angular.module('CandyBrush', ['ngRoute', 'ngResource', 'infinite-scroll', 'ngS3upload', "ngGravatar", "directives.customvalidation.customValidationTypes"]).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});
