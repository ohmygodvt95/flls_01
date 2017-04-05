app.service('Subjects', function ($http, $q, $state) {
  this.index = function (user_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'users/' + user_id + '/subjects').then(function (response) {
      deferred.resolve(response.data.data);
    }, function (response) {
      $state.go('user_not_found');
    });
    return deferred.promise;
  };

  this.show = function (subject_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'subjects/' + subject_id)
      .then(function (response) {
        deferred.resolve(response.data.data);
    }, function (response) {
      $state.go('permission_denied');
    });
    return deferred.promise;
  };

  this.create = function (data) {
    var deferred = $q.defer();
    var promise = $http.post(app.basePath + 'subjects',{subject: data})
      .then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        deferred.resolve(response.data);
      });
    return deferred.promise;
  };
});
