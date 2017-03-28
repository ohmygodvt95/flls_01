app
  .controller('SidebarController', function ($scope, $rootScope, Auth, Sidebar, $state, $mdDialog, Toast) {
    $scope.signedIn = Auth.isAuthenticated;
    var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    /**
     * Run controller
     */
    Auth.currentUser().then(function (user) {
      $scope.init();
    });
    /**
     * Init controller
     */
    $scope.init = function () {
      Sidebar.index(Auth._currentUser.id).then(function (data) {
        $scope.data = data;
      });
    };
    /**
     * Show folder info
     * @param data
     */
    $scope.showFolder = function (data) {
      $state.go('users.user.folders.folder', data);
    };
    /**
     * Show new folder dialog
     * @param ev
     */
    $scope.createFolder = function (ev) {
      $mdDialog.show({
        controller: 'FolderNewDialog',
        templateUrl: 'views/folders/new.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (data) {
          if (data) {
            $scope.data.folders.unshift(data.data);
            if ($scope.data.folders.length > 5) {
              $scope.data.folders.length = 5;
            }
            Toast.show(data.message);
            $state.go('users.user.folders.folder', {
              user_id: Auth._currentUser.id,
              folder_id: data.data.id
            });
          }
        });
    };
  });
