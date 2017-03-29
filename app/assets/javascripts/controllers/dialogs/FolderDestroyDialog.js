app
  .controller('FolderDestroyDialog', function ($scope, $mdDialog, folder) {
    $scope.folder = folder;
    /**
     * Hide dialog
     */
    $scope.hide = function(data) {
      $mdDialog.hide(data);
    };
  });
