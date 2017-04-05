app.service('Images', function ($http, $q) {
  this.index = function (page) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + '/images?page=' + page).then(function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.create = function (data) {
    var fd = new FormData();
    fd.append('file', data);
    var deferred = $q.defer();
    var promise = $http.post(app.basePath + '/images', fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    }).then(function (response) {
      deferred.resolve(response.data);
    }, function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.delete = function (image) {
    var deferred = $q.defer();
    var promise = $http.delete(app.basePath + '/images/' + image.id).then(function (response) {
      deferred.resolve(response.data);
    }, function (response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };
});
