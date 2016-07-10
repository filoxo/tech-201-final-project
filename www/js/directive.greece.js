angular.module('creativ.directive.greece', [])
  .directive('greeceWingedVictory', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        create($element[0]);
      }
    };

    function create(glFrame) {
      var scene,
        camera,
        renderer,
        element,
        container,
        effect,
        controls;

      init();

      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);
        //camera.position.z = 0.01;
        camera.position.set(0, 0, .1);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        element = renderer.domElement;

        container = glFrame;
        container.appendChild(element);

        controls = new THREE.OrbitControls(camera, element);
        controls.noPan = true;
        controls.noZoom = true;

        var textures = getTexturesFromAtlasFile("texture/sun_temple_stripe.jpg", 6);
        var materials = [];
        for (var i = 0; i < textures.length; i++) {
          materials.push(new THREE.MeshBasicMaterial({map: textures[i]}));
        }
        var skyBox = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshFaceMaterial(materials));
        skyBox.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
        scene.add(skyBox);

        // Our preferred controls via DeviceOrientation
        function setOrientationControls(e) {
          if (!e.alpha) {
            return;
          }

          controls = new THREE.DeviceOrientationControls(camera, true);
          controls.connect();
          controls.update();

          window.removeEventListener('deviceorientation', setOrientationControls, true);
        }

        window.addEventListener('deviceorientation', setOrientationControls, true);

        animate();
      }

      function getTexturesFromAtlasFile(atlasImgUrl, tilesNum) {
        var textures = [];
        for (var i = 0; i < tilesNum; i++) {
          textures[i] = new THREE.Texture();
        }
        var imageObj = new Image();
        imageObj.onload = function () {
          var canvas, context;
          var tileWidth = imageObj.height;
          for (var i = 0; i < textures.length; i++) {
            canvas = document.createElement('canvas');
            context = canvas.getContext('2d');
            canvas.height = tileWidth;
            canvas.width = tileWidth;
            context.drawImage(imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
            textures[i].image = canvas;
            textures[i].needsUpdate = true;
          }
        };
        imageObj.src = atlasImgUrl;
        return textures;
      }

      function animate() {
        controls.update();
        camera.updateProjectionMatrix();

        requestAnimationFrame(animate);
        render();
      }

      function render() {
        renderer.render(scene, camera);
      }
    }
  }]);
