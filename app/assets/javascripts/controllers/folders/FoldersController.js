app
  .controller('FoldersController',
    function ($scope, $state, $stateParams, Auth, Folders, user_id, $mdDialog, Toast) {
      /**
       * Init data
       */
      $scope.init = function () {
        Folders.index(user_id).then(function (data) {
          $scope.data = data;
          $scope.canEditDelete = Auth._currentUser.id === user_id;
        });
      };

      /**
       * Show folder by folder id
       * @param folder: folder object
       */
      $scope.show = function (ev, folder) {
        ev.stopPropagation();
        $state.go('users.user.folders.folder', {user_id: user_id, folder_id: folder.id})
      };
      /**
       * Edit folder end update this folder if success
       * @param ev
       * @param folder
       */
      $scope.edit = function (ev, folder) {
        $mdDialog.show({
          locals: {folder: folder},
          controller: 'FolderEditDialog',
          templateUrl: 'views/folders/edit.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
          .then(function (data) {
            if (data) {
              for(var i = 0; i < $scope.data.length; i++){
                if($scope.data[i].id === data.data.id){
                  $scope.data[i] = data.data;
                  break;
                }
              }
              Toast.show(data.message);
            }
          });
      };

      $scope.fork = function (ev, folder) {
        ev.stopPropagation();
      };
      /**
       * Run controller
       */
      $scope.init();
    });
