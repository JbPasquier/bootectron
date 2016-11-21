angular.module('electron.app', ['ngRoute', 'electangular'])
       .controller('mainController', mainController)
       .service('todoService', todoService)
       .factory('todoFactory', todoFactory)
       .config(routes)
       ;
