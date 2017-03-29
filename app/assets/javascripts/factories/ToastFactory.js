app.factory('Toast', function ($mdToast) {
  return {
    /**
     * Toast like google
     * @return void
     * @param string
     * @param timeout
     */
    show: function (string, timeout) {
      timeout = timeout || 3500;
      $mdToast.show(
        $mdToast.simple()
          .textContent(string)
          .parent(angular.element(document.body))
          .position('bottom right')
          .hideDelay(timeout)
      );
    }
  };
});
