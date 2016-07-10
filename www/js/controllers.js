angular.module('creativ.controllers', [])
  .controller('AppCtrl', AppController)
  .controller('HomeCtrl', HomeController)
  .controller('MesopotamiaCtrl', MesopotamiaController)
  .controller('EgyptPyramidsCtrl', EgyptPyramidsController)
  .controller('EgyptTombOfKingsCtrl', EgyptTombOfKingsController)
  .controller('EgyptRamesseumCtrl', EgyptRamesseumController)
  .controller('GreeceWingedVictoryCtrl', GreeceWingedVictoryController)
;

var SHARED_DI =  ['$scope', '$ionicModal'];

AppController.$inject = SHARED_DI;
function AppController($scope, $ionicModal) {
  $scope.data = {
    enableAwesome: true
  };
  $ionicModal.fromTemplateUrl('templates/settings.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal
  });
  $scope.openSettings = function () {
    $scope.modal.show();
  };
  $scope.closeSettings = function () {
    $scope.modal.hide();
  };
}

HomeController.$inject = SHARED_DI;
function HomeController($scope, $ionicModal) {
}

MesopotamiaController.$inject = SHARED_DI;
function MesopotamiaController($scope, $ionicModal){
  var vm = this;
  vm.title = 'Mesopotamian Landscape';
  vm.description = '<p>The domestication of grains first occurred in the valleys of Mesopotamia, like the one pictured here. Recall that Mesopotamia means "between the rivers", which made these lands fertile for agriculture. These early civilizations found creative and innovative ways to take advantage of this terrain.</p>';
  vm.imageCredit = 'Credit: Image by Manυ © All rights reserved.';

  ModalConfig($scope, $ionicModal, 'templates/description.html');
}

EgyptPyramidsController.$inject = SHARED_DI;
function EgyptPyramidsController($scope, $ionicModal) {
  var vm = this;
  vm.title = 'Pyramids of Giza';
  vm.description = '<p>Pyramids like these were erected during the period of the Old Kingdom as burial places for the pharaohs. Successive Old Kingdom pharaohs built larger and higher pyramids. These complex structures were extremely challenging to make, and scholars have yet to reach a concensus on how such feats were achieved. We do know that these pyramids were truly creative engineering endeavors that have lasted through the&nbsp;ages.</p>';
  vm.imageCredit = 'Credit: Image by ___ © All rights reserved.';

  ModalConfig($scope, $ionicModal, 'templates/description.html');
}

EgyptTombOfKingsController.$inject = SHARED_DI;
function EgyptTombOfKingsController($scope, $ionicModal) {
  var vm = this;
  vm.title = 'Egypt: Tomb Of Kings';
  vm.description = '<p>Many of the underground tombs date back to the 4th century BC, and are carved out of solid rock. The name comes from the magnificence of the tombs; no kings were in fact buried here. Instead these are thought to be burial sites for higher class citizens and officials.<p>' +
    '<p>Recall that the Egyptians believed in the continuation of life after death, and that depended on three things:</p>' +
    '<ul class="disc">' +
      '<li>having one\'s name preserved in writing (like on the walls of these tombs)</li>' +
      '<li>being buried in Egyptian soil</li>' +
      '<li>being properly prepared for the next life (which is reflect in the embalming process and other rituals)</li>' +
    '</ul>';
  vm.imageCredit = 'Credit: Image by David Anderson © All rights reserved.';

  ModalConfig($scope, $ionicModal, 'templates/description.html');
}

EgyptRamesseumController.$inject = SHARED_DI;
function EgyptRamesseumController($scope, $ionicModal) {
  var vm = this;
  vm.title = 'Ramesseum';
  vm.description = '<p>The Ramesseum is the memorial temple of Pharaoh Ramesses II, also known as "Ramesses the Great". He was a pharaoh during the New Kingdom period. His memorial temple was to be used as a place of worship dedicated to pharaoh, god on earth, where his memory would have been kept alive after his death. Jean-François Champollion first visited the ruins of the site in 1829 and was the first to identify the hieroglyphs making up Ramesses\'s names and titles on the walls.</p>';
  vm.imageCredit = 'Credit: Image by Mike Anton © All rights reserved.';

  ModalConfig($scope, $ionicModal, 'templates/description.html');
}

GreeceWingedVictoryController.$inject = SHARED_DI;
function GreeceWingedVictoryController($scope, $ionicModal) {
  var vm = this;
  vm.title = 'Winged Victory of Samothrace';
  vm.description = '<p>The <em>Winged Victory of Samothrace</em>, also known as the <em>Nike of Samothrace</em>, is a Hellenistic  sculpture made of marble in the likeness of the Greek goddess Nike. It has been  displayed at the Louvre since 1884 and is one of the most celebrated sculptures in the world. It is one of a small number of major surviving original Hellenistic statues rather than Roman copies.</p>' +
    '<p>Here it is rendered inside a Greek sun temple, a building of religious worship as well as philosophy.</p>';
  vm.imageCredit = 'Credit: Image on threejs.org';

  ModalConfig($scope, $ionicModal, 'templates/description.html');
}

function ModalConfig(scope, ionicModalService, templateUrl) {
  ionicModalService.fromTemplateUrl(templateUrl, {
    scope: scope
  }).then(function (modal) {
    scope.modal = modal
  });
  scope.openModal = function () {
    scope.modal.show();
  };
  scope.closeModal = function () {
    scope.modal.hide();
  };
}
