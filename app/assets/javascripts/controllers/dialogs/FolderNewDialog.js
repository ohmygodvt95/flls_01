app
  .controller('FolderNewDialog', function ($scope, $rootScope, $state, $mdDialog, Auth, Folders) {
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
    $scope.create = function(data) {
      Folders.create($rootScope.user.id, data).then(function (data) {
        $scope.error = null;
        $mdDialog.hide(data);
      }, function (data) {
        $scope.error = data.message;
      });
    };
  });
