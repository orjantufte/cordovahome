/// <reference path="app.js" />
var app = angular.module('app', ['ui.router', 'app.controllers',
    //'ngAnimate',
    'uiGmapgoogle-maps', 'ui.select', 'ngSanitize', 'ui.date', 'httpHandler']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('start', {
        url: "/",
        templateUrl: "pages/start/start.html",
        controller: 'StartCtrl'
    })
        .state('spot', {
            url: "/spot/{id}",
            templateUrl: "pages/spot/spot.html",
            controller: 'SpotCtrl'
        })

    .state('test', {
        url: "/test",
        templateUrl: "src/js/test/test.html",
        controller: 'TestCtrl'
    });
});
