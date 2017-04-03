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
            templateUrl: 'views/sidebar/index.html',
            controller: 'SidebarController'
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
      .state('users.user.folders.folder', {
        url: '/{folder_id: int}',
        views: {
          'content@users': {
            templateUrl: 'views/folders/show.html',
            controller: 'ShowFoldersController'
          }
        },
        resolve: {
          folder_id: function ($stateParams) {
            return $stateParams.folder_id
          }
        }
      })
      .state('subjects', {
        url: '/subjects',
        abstract: true,
        views: {
          'main': {
            templateUrl: 'views/subjects/layouts.html'
          }
        }
      })
      .state('subjects.new', {
        url: '/new',
        views: {
          'content@subjects': {
            templateUrl: 'views/subjects/new.html',
            controller: 'NewSubjectsController'
          }
        },
        onEnter: function (Auth, $state) {
          Auth.currentUser()
            .then(function (user) {
            }, function (error) {
              $state.go('welcome');
            });
        }
      })
      .state('subjects.subject', {
        url: '/{subject_id: int}',
        views: {
          'content@subjects': {
            templateUrl: 'views/subjects/show.html',
            controller: 'ShowSubjectsController'
          }
        },
        resolve: {
          subject_id: function ($stateParams) {
            console.log($stateParams.subject_id);
            return $stateParams.subject_id
          }
        }
      })
      .state('subjects.subject.flash_card', {
        url: '/flashcards',
        views: {
          'content@subjects': {
            templateUrl: 'views/flashcard/index.html',
            controller: 'FlashCardsController'
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
      })
      .state('folder_not_found', {
        url: '/errors/folder-not-found',
        views: {
          'main': {
            templateUrl: 'views/errors/folder_not_found.html'
          }
        }
      })
      .state('subject_not_found', {
        url: '/errors/subject-not-found',
        views: {
          'main': {
            templateUrl: 'views/errors/subject_not_found.html'
          }
        }
      })
    .state('permission_denied', {
      url: '/errors/permission_denied',
      views: {
        'main': {
          templateUrl: 'views/errors/permission_denied.html'
        }
      }
    });
    $urlRouterProvider.otherwise('/welcome');
  });
