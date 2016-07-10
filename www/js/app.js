/* Creativ
* Companion app for BYU TECH 201
*
* @author: Carlos Filoteo
*/
angular.module('creativ', ['ionic', 'creativ.controllers', 'creativ.directives'])
  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      ionic.Platform.fullScreen();
      if (window.StatusBar) {
        return StatusBar.hide();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl as home'
      })
      .state('mesopotamia', {
        url: '/mesopotamia',
        templateUrl: 'templates/mesopotamia.html',
        controller: 'MesopotamiaCtrl as e'
      })
      .state('egypt-pyramids', {
        url: '/egypt-pyramids',
        templateUrl: 'templates/egyptPyramids.html',
        controller: 'EgyptPyramidsCtrl as e'
      })
      .state('egypt-tomb-of-kings', {
        url: '/egypt-tomb-of-kings',
        templateUrl: 'templates/egyptTombOfKings.html',
        controller: 'EgyptTombOfKingsCtrl as e'
      })
      .state('egypt-ramesseum', {
        url: '/egypt-ramesseum',
        templateUrl: 'templates/egyptRamesseum.html',
        controller: 'EgyptRamesseumCtrl as e'
      })
      .state('greece-coast', {
        url: '/greece-coast',
        templateUrl: 'templates/greeceCoast.html',
        controller: 'GreeceCoastCtrl as e'
      })
      .state('greece-crete', {
        url: '/greece-crete',
        templateUrl: 'templates/greeceCrete.html',
        controller: 'GreeceCreteCtrl as e'
      })
      .state('greece-parthenon', {
        url: '/greece-parthenon',
        templateUrl: 'templates/greeceParthenon.html',
        controller: 'GreeceParthenonCtrl as e'
      })
      .state('greece-winged-victory', {
        url: '/greece-winged-victory',
        templateUrl: 'templates/greeceWingedVictory.html',
        controller: 'GreeceWingedVictoryCtrl as e'
      })
      ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
