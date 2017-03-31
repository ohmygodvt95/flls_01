app
  .controller('ShowSubjectsController', function ($scope, $state, $stateParams, Auth, Subjects, Words, subject_id) {
    /**
     * Init data
     */
    $scope.init = function () {
      $scope.record_id = 0;
      $scope.data = [];
      $scope.loadMore();
    };
    $scope.loadMore = function () {
      Words.index(subject_id, $scope.record_id).then(function(data) {
        $scope.data.push.apply($scope.data, data);
        $scope.record_id = data[data.length - 1].id;
      });
    };
    /**
     * Show subject by subject id
     * @param subject: subject object
     */
    $scope.show = function (subject) {
      $state.go('')
    };
    $scope.flashCard = function () {
      $state.go('subjects.subject.flash_card',
        {subject_id: subject_id})
    };
    /**
     * Run controller
     */
    $scope.init();
  });
