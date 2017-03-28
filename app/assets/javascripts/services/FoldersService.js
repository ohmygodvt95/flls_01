app.service('Folders', function ($http, $q, $state) {
  this.index = function (user_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'users/' + user_id + '/folders').then(function (response) {
      deferred.resolve(response.data.data);
    }, function (response) {
      $state.go('user_not_found');
    });
    return deferred.promise;
  };

  this.show = function (user_id, folder_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'users/' + user_id + '/folders/' + folder_id)
      .then(function (response) {
        deferred.resolve(response.data);
    }, function (response) {
      $state.go('folder_not_found');
    });
    return deferred.promise;
  }
});
