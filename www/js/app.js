/* Creativ
* Companion app for BYU TECH 201
*
* @author: Carlos Filoteo
*/
angular.module('creativ', ['ionic','ionic.service.core', 'creativ.controllers', 'creativ.directives'])
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

      .state('china-great-wall', {
        url: '/china-great-wall',
        templateUrl: 'templates/chinaGreatWall.html',
        controller: 'ChinaGreatWallCtrl as e'
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

      .state('rome-forum', {
        url: '/rome-forum',
        templateUrl: 'templates/romeForum.html',
        controller: 'RomeForumCtrl as e'
      })
      .state('rome-colosseum', {
        url: '/rome-colosseum',
        templateUrl: 'templates/romeColosseum.html',
        controller: 'RomeColosseumCtrl as e'
      })

      .state('istanbul-mosque', {
        url: '/istanbul-mosque',
        templateUrl: 'templates/istanbulMosque.html',
        controller: 'IstanbulMosqueCtrl as e'
      })
      .state('istanbul-medina', {
        url: '/istanbul-medina',
        templateUrl: 'templates/istanbulMedina.html',
        controller: 'IstanbulMedinaCtrl as e'
      })
      .state('taj-mahal', {
        url: '/taj-mahal',
        templateUrl: 'templates/tajMahal.html',
        controller: 'TajMahalCtrl as e'
      })
      
      .state('dome-of-the-rock', {
        url: '/dome-of-the-rock',
        templateUrl: 'templates/domeOfTheRock.html',
        controller: 'DomeOfTheRockCtrl as e'
      })
      ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
