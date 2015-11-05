angular.module('CandyBrush', ['ngRoute', 'satellizer', 'toaster', 'ngResource', 'infinite-scroll', 'ngS3upload', "ngGravatar", 'satellizer']).config(
function($authProvider){
  $authProvider.tokenName = 'token';
  $authProvider.github({
    url: 'http://54.169.151.73/auth/git',
    clientId: '7c3cd4ad1ef68c3b98c1',
    clientSecret: '6794e0e24bb696408803f1fb8571566246259379',
    redirectUri: 'http://localhost:9000',
    optionalUrlParams: ['scope'],
    scope: ['user:email']
  });
  $authProvider.google({
    url: 'http://localhost:8000/api/auth/google',
    clientId: '982638547625-ui0lp1pteh6moug1sgct1ag0ub0aen7g.apps.googleusercontent.com',
    clientSecret: '3_FHOlRYTrJffGBhGAMr59b_',
    redirectUri: 'http://localhost:3000/'
  });
  $authProvider.facebook({
    url: 'http://localhost:8000/api/auth/facebook',
    clientId: '953913041345816',
    clientSecret: 'e9652fa4cea1dca0a1d6658adaa0ab36',
    redirectUri: 'http://localhost:3000/'
  });
  $authProvider.oauth2({
    name: 'grit',
    //url: 'http://localhost',
    clientId: '1',
    clientSecret: 'client_secret',
    redirectUri: window.location.origin,
    authorizationEndpoint: 'http://52.88.21.108/oauth2/access_token'
  });
  $authProvider.loginUrl = 'http://52.88.21.108/auth/login';
});
