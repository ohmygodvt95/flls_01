app.service('FlashCard', function ($http, $q, $state) {
  this.index = function (user_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'users/' + user_id + '/flash_card').then(function (response) {
      deferred.resolve(response.data.data);
    }, function (response) {
      $state.go('user_not_found');
    });
    return deferred.promise;
  }
});
