app
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        views: {
          'main': {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
          }
        },
        onEnter: function (Auth, $state) {
          Auth.currentUser()
            .then(function (user) {
              $state.go('home');
            });
        }
      })
      .state('users', {
        url: '/users',
        abstract: true,
        views: {
          'main': {
            templateUrl: 'views/users/layouts.html'
          },
          'sidebar@users': {
            templateUrl: 'views/auth/login.html'
          }
        }
      })
      .state('users.user', {
        url: '/{user_id: int}',
        views: {
          'content@users': {
            template: 'user inf o'
          }
        },
        resolve: {
          user_id: function ($stateParams) {
            return $stateParams.user_id
          }
        }
      })
      .state('users.user.folders', {
        url: '/folders',
        views: {
          'content@users': {
            templateUrl: 'views/folders/index.html',
            controller: 'FoldersController'
          }
        }
      })
      .state('users.user.subjects', {
        url: '/subjects',
        views: {
          'content@users': {
            templateUrl: 'views/subjects/index.html',
            controller: 'SubjectsController'
          }
        }
      })
      .state('users.user.folders.folder', {
        url: '/{folder_id: int}',
        views: {
          'content@users': {
            templateUrl: 'views/folders/show.html',
            controller: 'ShowFoldersController'
          }
        }
      })
      .state('home', {
        url: '/home',
        views: {
          'main': {
            templateUrl: 'views/home/index.html',
            controller: 'HomeController'
          }
        },
        onEnter: function (Auth, $state) {
          Auth.currentUser()
            .then(function (user) {
              },
              function (error) {
                $state.go('welcome');
              }
            );
        }
      })
      .state('goodbye', {
        url: '/goodbye',
        views: {
          'main': {
            templateUrl: 'views/auth/goodbye.html',
            controller: 'AuthController'
          }
        },
        onEnter: function (Auth, $state) {
          Auth.currentUser().then(function () {
            $state.go('home');
          });
        }
      })
      .state('user_not_found', {
        url: '/errors/user-not-found',
        views: {
          'main': {
            templateUrl: 'views/errors/user_not_found.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/welcome');
  });
