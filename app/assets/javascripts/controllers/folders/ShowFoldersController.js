app
  .controller('ShowFoldersController', function ($scope, $state, $stateParams, Auth, Folders, user_id, folder_id) {
    /**
     * Init data
     */
    $scope.init = function () {
      Folders.show(user_id, folder_id).then(function(data){
        $scope.data = data;
      });
    };

    /**
     * Show subject by folder id
     * @param folder: folder object
     */
    $scope.show = function (folder) {
      $state.go('users.user.folders.folder', {user_id: user_id, folder_id: folder.id});
    };

    $scope.showSet = function (subject) {
      $state.go('subjects.subject', {subject_id: subject.id});
    };
    /**
     * Run controller
     */
    $scope.init();
  });
