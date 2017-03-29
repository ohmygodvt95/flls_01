app
  .controller('FlashCardsController', function ($scope, $state, $stateParams, Auth, Subjects, user_id) {
    /**
     * Run controller
     */
    $(document).ready(function() {
      $('.flashcard').on('click', function() {
        $('.flashcard').toggleClass('flipped');
      });
    });
  });
