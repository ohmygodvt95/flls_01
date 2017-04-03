app
  .controller('NewSubjectsController', function ($scope, $state, $stateParams, Auth, Subjects) {
    $scope.inProgress = false;
    Auth.currentUser().then(function (user) {
      $scope.subject = {
        name: '',
        permission: 0,
        user_id: user.id,
        words_attributes: [
          {
            word_content: '',
            word_image: null,
            definition_content: '',
            definition_image: null
          },
          {
            word_content: '',
            word_image: null,
            definition_content: '',
            definition_image: null
          },
          {
            word_content: '',
            word_image: null,
            definition_content: '',
            definition_image: null
          }
        ]
      };
    });

    $scope.addWord = function () {
      $scope.subject.words_attributes.push({
        word_content: '',
        word_image: null,
        definition_content: '',
        definition_image: null
      });
    };

    $scope.addWordIndex = function (index) {
      $scope.subject.words_attributes.splice(index + 1, 0,{
        word_content: '',
        word_image: null,
        definition_content: '',
        definition_image: null
      });
    };

    $scope.delWord = function (index) {
      $scope.subject.words_attributes.splice(index, 1);
    };
    
    $scope.create = function () {
      $scope.inProgress = true;
      Subjects.create($scope.subject).then(function (data) {
        $scope.inProgress = false;
        $state.go('subjects.subject', {subject_id: data.data.id});
      }, function (error) {
        $scope.inProgress = false;
      });
    }
  });
