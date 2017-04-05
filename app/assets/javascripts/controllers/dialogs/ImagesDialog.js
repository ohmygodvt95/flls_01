app
  .controller('ImagesDialog', function ($scope, $rootScope, $state, $mdDialog, Auth, Images, Toast) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.page = 1;
    $scope.data = null;
    $scope.inProgress = false;
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
      Images.index($scope.page).then(function (data) {
        $scope.data = data.data;
      });
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
     * Next page button
     */
    $scope.next = function () {
      if($scope.data.next_page !== null){
        Images.index($scope.data.next_page).then(function (data) {
          $scope.data = data.data;
        });
      }
    };
    /**
     * Prev page button
     */
    $scope.prev = function () {
      if($scope.data.prev_page !== null){
        Images.index($scope.data.prev_page).then(function (data) {
          $scope.data = data.data;
        });
      }
    };
    /**
     * Create images
     */
    $scope.create = function() {
      $scope.inProgress = true;
      var file = $('#file')[0].files[0];
      if(file){
        $('#file').val(null);
        Images.create(file).then(function (data) {
          Images.index($scope.page).then(function (data) {
            $scope.data = data.data;
          });
          $scope.inProgress = false;
        }, function (error) {
          $scope.inProgress = false;
          Toast.show(error.message);
        });
      }
      else{
        $scope.inProgress = false;
      }
    };
    /**
     * Delete image by id
     * @param image
     */
    $scope.delete = function (image) {
      $scope.inProgress = true;
      Images.delete(image).then(function (data) {
        Images.index($scope.page).then(function (data) {
          $scope.data = data.data;
        });
        $scope.inProgress = false;
        Toast.show(data.message);
      }, function (error) {
        $scope.inProgress = false;
        Toast.show(error.message);
      });
    };
    /**
     * Close Dialog and sen image data
     * @param image
     */
    $scope.get = function (image) {
      $mdDialog.hide(image);
    };
  });
