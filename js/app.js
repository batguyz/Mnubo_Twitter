var MyApp = angular.module('starter', ['ui.router'])

MyApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'home'
    })

    .state('pageone', {
        url: '/pageone',
        templateUrl: 'views/pageone.html'
    })
    
       .state('pagetwo', {
        url: '/pagetwo',
        templateUrl: 'views/pagetwo.html'
    })

    $urlRouterProvider.otherwise("/home");

})