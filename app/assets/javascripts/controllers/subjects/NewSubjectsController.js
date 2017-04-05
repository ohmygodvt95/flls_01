app
  .controller('NewSubjectsController', function ($scope, $state, $stateParams, Auth, Subjects, $mdDialog) {
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
            definition_image: null,
            word_image_data: null,
            definition_image_data: null
          },
          {
            word_content: '',
            word_image: null,
            definition_content: '',
            definition_image: null,
            word_image_data: null,
            definition_image_data: null
          },
          {
            word_content: '',
            word_image: null,
            definition_content: '',
            definition_image: null,
            word_image_data: null,
            definition_image_data: null
          }
        ]
      };
    });
    /**
     * Add word into list
     */
    $scope.addWord = function () {
      $scope.subject.words_attributes.push({
        word_content: '',
        word_image: null,
        definition_content: '',
        definition_image: null,
        word_image_data: null,
        definition_image_data: null
      });
    };
    /**
     * Add a word into list bu index
     * @param index
     */
    $scope.addWordIndex = function (index) {
      $scope.subject.words_attributes.splice(index + 1, 0,{
        word_content: '',
        word_image: null,
        definition_content: '',
        definition_image: null,
        word_image_data: null,
        definition_image_data: null
      });
    };
    /**
     * Delete word
     * @param index
     */
    $scope.delWord = function (index) {
      $scope.subject.words_attributes.splice(index, 1);
    };
    /**
     * Add image for term
     * @param ev
     * @param item
     */
    $scope.addImageIntoTerm = function (ev, item) {
      $mdDialog.show({
        controller: 'ImagesDialog',
        templateUrl: 'views/images/index.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (data) {
          if(data){
            item.word_image = data.id;
            item.word_image_data = data;
          }
        });
    };
    /**
     * Add image for definition
     * @param ev
     * @param item
     */
    $scope.addImageIntoDefinition = function (ev, item) {
      $mdDialog.show({
        controller: 'ImagesDialog',
        templateUrl: 'views/images/index.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (data) {
          if(data){
            item.definition_image = data.id;
            item.definition_image_data = data;
          }
        });
    };
    /**
     * check image exist
     * @param item
     * @param type
     * @returns {boolean}
     */
    $scope.checkImage = function (item, type) {
      if(type === 'term'){
        return item.word_image !== null;
      }
      else{
        return item.definition_image !== null;
      }
    };
    /**
     * remove image term/definition
     * @param item
     * @param type
     * @returns {null}
     */
    $scope.removeImage = function (item, type) {
      if(type === 'term'){
        return item.word_image = null;
      }
      else{
        return item.definition_image = null;
      }
    };
    /**
     * create set
     */
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
