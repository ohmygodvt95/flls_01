app
  .controller('ShowSubjectsController', function ($scope, $state, $stateParams, Auth, Subjects, user_id) {
    /**
     * Init data
     */
    $scope.init = function () {
      Subjects.index(user_id).then(function(data){
        $scope.data = data;
      });
    };

    /**
     * Show subject by subject id
     * @param subject: subject object
     */
    $scope.show = function (subject) {
      $state.go('')
    };
    $scope.flash_card = function () {
      $state.go('users.user.flash_card', {user_id: user_id})
    };
    /**
     * Run controller
     */
    $scope.init();
  });
