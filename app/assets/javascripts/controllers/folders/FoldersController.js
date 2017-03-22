app
  .controller('FoldersController', function ($scope, $state, $stateParams, Auth, Folders, user_id) {
    Folders.index(user_id).then(function(data){
      $scope.data = data;
    });
  });
