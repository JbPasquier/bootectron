function routes($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'mainController',
          controllerAs: 'vm'
      });
}
