app
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/home/index.html',
        controller: 'WelcomeController'
      });
    $urlRouterProvider.otherwise('/welcome');
  });
