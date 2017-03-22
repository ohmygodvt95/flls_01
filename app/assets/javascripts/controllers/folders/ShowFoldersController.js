app
  .controller('ShowFoldersController', function ($scope, $state, $stateParams, Auth, Folders, user_id) {
    /**
     * Init data
     */
    $scope.init = function () {
      Folders.index(user_id).then(function(data){
        $scope.data = data;
      });
    };

    /**
     * Show folder by folder id
     * @param folder: folder object
     */
    $scope.show = function (folder) {
      $state.go('')
    };

    /**
     * Run controller
     */
    $scope.init();
  });
