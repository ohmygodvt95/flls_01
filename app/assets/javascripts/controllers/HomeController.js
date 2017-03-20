app
  .controller('HomeController', function ($scope, $rootScope, Auth, $state) {
    Auth.currentUser().then(function (user){
      $rootScope.user = user;
      $scope.hello = user.username;
    });
  });
