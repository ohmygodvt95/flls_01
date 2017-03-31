app.service('Words', function ($http, $q, $state) {
  this.index = function (subject_id, record_id) {
    var deferred = $q.defer();
    var promise = $http.get(app.basePath + 'subjects/' + subject_id +
      '/words?record_id=' + record_id).then(function (response) {
      deferred.resolve(response.data.data);
    }, function (response) {
      $state.go('subject_not_found');
    });
    return deferred.promise;
  }
});
