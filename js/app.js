angular.module('electron.app', ['ngRoute'])
       .controller('mainController', mainController)
       .service('todoService', todoService)
       .factory('todoFactory', todoFactory)
       .config(routes)
       ;
