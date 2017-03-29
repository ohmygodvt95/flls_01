app
  .controller('ShowSubjectsController', function ($scope, $state, $stateParams, Auth, Subjects, Words, subject_id) {
    /**
     * Init data
     */
    $scope.init = function () {
      Words.index(subject_id).then(function(data){
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
    $scope.flashCard = function () {
      $state.go('subjects.subject.flash_card',
        {subject_id: subject_id})
    };
    /**
     * Run controller
     */
    $scope.init();
  });
