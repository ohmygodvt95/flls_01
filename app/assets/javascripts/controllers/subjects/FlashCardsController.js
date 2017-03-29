app
  .controller('FlashCardsController', function ($scope, $state, $stateParams, Auth, Subjects) {
    /**
     * Run controller
     */
    $(document).ready(function() {
      $('.flashcard').on('click', function() {
        $('.flashcard').toggleClass('flipped');
      });
    });
  });
