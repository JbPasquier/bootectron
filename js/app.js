angular.module('electron.app', ['ngRoute', 'electangular'])
    .controller('navbarController', navbarController)
    .controller('mainController', mainController)
    .service('todoService', todoService)
    .factory('todoFactory', todoFactory)
    .config(routes);
