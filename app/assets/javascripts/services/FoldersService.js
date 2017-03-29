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

  this.create = function (user_id, data) {
    var deferred = $q.defer();
    var promise = $http.post(app.basePath + 'users/' + user_id + '/folders', {folder: data})
      .then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.resolve(response.data);
      });
    return deferred.promise;
  };

  this.update = function (user_id, data) {
    var deferred = $q.defer();
    var promise = $http.patch(app.basePath + 'users/' + user_id + '/folders/' + data.id, {folder: data})
      .then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.resolve(response.data);
      });
    return deferred.promise;
  }

  this.destroy = function (user_id, data) {
    var deferred = $q.defer();
    var promise = $http.delete(app.basePath + 'users/' + user_id + '/folders/' + data.id)
      .then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.resolve(response.data);
      });
    return deferred.promise;
  }
});
