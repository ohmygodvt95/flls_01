app
  .controller('SubjectsController', function ($scope, $state, $stateParams, Auth, Subjects, user_id) {
    Subjects.index(user_id).then(function(data){
      $scope.data = data;
    });
  });
