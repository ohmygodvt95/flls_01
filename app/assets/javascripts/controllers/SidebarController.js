app
  .controller('SidebarController', function ($scope, $rootScope, Auth, Sidebar, $state) {
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
      Sidebar.index(Auth._currentUser.id).then(function (data) {
        $scope.data = data;
        console.log($scope.data);
      });
    };
    /**
     * Show folder info
     * @param data
     */
    $scope.showFolder = function (data) {
      $state.go('users.user.folders.folder', data);
    }
  });
