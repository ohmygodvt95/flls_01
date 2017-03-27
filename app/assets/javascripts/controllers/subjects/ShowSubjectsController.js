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

    /**
     * Run controller
     */
    $scope.init();
  });
