angular.module('creativ.directives',
  [
    'creativ.directive.greece'
  ])
  .directive('cardboardGl', [function () {
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
        controls,

      // Particles
        particles = new THREE.Object3D(),
        totalParticles = 50,
        maxParticleSize = 200;

      init();

      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.001, 700);
        camera.position.set(0, 15, 0);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        element = renderer.domElement;

        container = glFrame;
        container.appendChild(element);

        effect = new THREE.StereoEffect(renderer);

        // Our initial control fallback with mouse/touch events in case DeviceOrientation is not enabled
        controls = new THREE.OrbitControls(camera, element);
        controls.target.set(
          camera.position.x + 0.15,
          camera.position.y,
          camera.position.z
        );
        controls.noPan = true;
        controls.noZoom = true;

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

        // Lighting
        var light = new THREE.PointLight(0x999999, 2, 100);
        light.position.set(50, 50, 50);
        scene.add(light);

        var lightScene = new THREE.PointLight(0x999999, 2, 100);
        lightScene.position.set(0, 5, 0);
        scene.add(lightScene);

        var floorTexture = THREE.ImageUtils.loadTexture('img/textures/wood.jpg');
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat = new THREE.Vector2(50, 50);
        floorTexture.anisotropy = renderer.getMaxAnisotropy();

        var floorMaterial = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          specular: 0xffffff,
          shininess: 20,
          shading: THREE.FlatShading,
          map: floorTexture
        });

        var geometry = new THREE.PlaneBufferGeometry(1000, 1000);

        var floor = new THREE.Mesh(geometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        scene.add(floor);

        var particleTexture = THREE.ImageUtils.loadTexture('img/textures/particle.png'),
          spriteMaterial = new THREE.SpriteMaterial({
            map: particleTexture,
            color: 0xffffff
          });

        for (var i = 0; i < totalParticles; i++) {
          var sprite = new THREE.Sprite(spriteMaterial);

          sprite.scale.set(64, 64, 1.0);
          sprite.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.75);
          sprite.position.setLength(maxParticleSize * Math.random());

          sprite.material.blending = THREE.AdditiveBlending;

          particles.add(sprite);
        }
        particles.position.y = 70;
        scene.add(particles);

        renderer.setSize(container.offsetWidth, container.offsetHeight);
        effect.setSize(container.offsetWidth, container.offsetHeight);
        animate();
      }

      function animate() {
        requestAnimationFrame(animate);
        update();
        render();
      }

      function update() {
        controls.update();
        camera.updateProjectionMatrix();
      }

      function render() {
        effect.render(scene, camera);
      }
    }
  }])
  .directive('mesopotamia', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0], function (scene) {
          LoadEquirectangularMesh(scene, 'texture/mesopotamia-landscape.jpg')
        });
      }
    }
  }])
  .directive('egyptPyramids', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0], function (scene) {
          LoadEquirectangularMesh(scene, 'texture/egypt-pyramids.jpg')
        });
      }
    }
  }])
  .directive('egyptTombOfKings', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/egypt-tomb-of-kings.jpg')
          });
      }
    }
  }])
  .directive('egyptRamesseum', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/egypt-ramesseum.jpg')
          });
      }
    }
  }])
  .directive('greeceCoast', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/greece-coast.jpg')
          });
      }
    }
  }])
  .directive('greeceCrete', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/greece-crete.jpg')
          });
      }
    }
  }])
  .directive('greeceParthenon', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/greece-parthenon.jpg')
          });
      }
    }
  }])
  .directive('romeForum', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/rome-forum.jpg')
          });
      }
    }
  }])
  .directive('romeColosseum', [function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        Create($element[0],
          function (scene) {
            LoadEquirectangularMesh(scene, 'texture/rome-colosseum.jpg')
          });
      }
    }
  }])
;

function Create(glContainer, sceneContentFn) {
  var camera,
    scene,
    renderer,
    controls;

  init();

  function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
    camera.target = new THREE.Vector3(0, 0, 0);
    scene = new THREE.Scene();

    if (sceneContentFn && typeof(sceneContentFn) === 'function') {
      sceneContentFn(scene);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    glContainer.appendChild(renderer.domElement);

    // Our initial control fallback with mouse/touch events in case DeviceOrientation is not enabled
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(
      camera.position.x + 0.15,
      camera.position.y,
      camera.position.z
    );
    controls.noPan = true;
    controls.noZoom = true;

    window.addEventListener('deviceorientation', setOrientationControls, true);

    animate();

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

function LoadEquirectangularMesh(_scene, url) {
  var geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(url)
  });
  var mesh = new THREE.Mesh(geometry, material);
  _scene.add(mesh);
}
