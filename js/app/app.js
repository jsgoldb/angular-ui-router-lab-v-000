angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider){
      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function ($stateParams, UserService) {
              return UserService.getUser($stateParams.id);
            }
          }
        });
    });