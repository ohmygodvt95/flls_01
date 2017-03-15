app
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController',
        onEnter: function (Auth, $state) {
          Auth.currentUser()
            .then(function (user) {
              $state.go('home');
            });
        }
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/index.html',
        controller: 'HomeController',
        onEnter: function (Auth, $state) {
          Auth.currentUser()
            .then(function (user) {},
              function (error) {
                $state.go('welcome');
              }
            );
        }
      })
      .state('goodbye', {
        url: '/goodbye',
        templateUrl: 'views/auth/goodbye.html',
        controller: 'AuthController',
        onEnter: function (Auth, $state) {
          Auth.currentUser().then(function () {
            $state.go('home');
          });
        }
      });
    $urlRouterProvider.otherwise('/welcome');
  });
