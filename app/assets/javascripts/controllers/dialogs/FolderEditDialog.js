app
  .controller('FolderEditDialog', function ($scope, $rootScope, $state, $mdDialog, Auth, Folders, folder) {
    $scope.signedIn = Auth.isAuthenticated;
    /**
     * Run controller
     */
    Auth.currentUser().then(function (user){
      $scope.init();
    });
    /**
     * Init controller
     */
    $scope.init = function () {
      $scope.folder = JSON.parse(JSON.stringify(folder));
      $scope.targetFolder = folder;
    };
    /**
     * Hide dialog
     */
    $scope.hide = function() {
      $mdDialog.hide();
    };
    /**
     * Cancel dialog
     */
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    /**
     * Create folder
     * @param data
     */
    $scope.update = function(data) {
      Folders.update($rootScope.user.id, data).then(function (data) {
        $scope.error = null;
        $mdDialog.hide(data);
      }, function (data) {
        $scope.error = data.message;
      });
    };
  });
