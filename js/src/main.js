import * as THREE from "./three-module.js";

const container = document.getElementById('3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight,
    0.1, 1000);
camera.position.set(0, 2, 4);
/*const axes = new THREE.AxesHelper(18);
scene.add(axes);*/

// Rendu
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true,});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.autoClear = false;
renderer.setPixelRatio(Math.min(window.devicePixelRatio));
container.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load("./js/src/texture/logo.png");
const geometry = new THREE.SphereGeometry(1, 80, 80);
const material = new THREE.MeshPhongMaterial({map: texture, wireframe: false});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 1
mesh.rotation.x = 0.08
mesh.rotation.y = 4
scene.add(mesh);

// Lumière
const ambientLight = new THREE.AmbientLight(0xfffa0f, 0.005);

const directionalLight = new THREE.DirectionalLight(0xffff0ff, 0.8);
directionalLight.position.set(15, 5, 5);
directionalLight.castShadow = true;
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(directionalLight, ambientLight);

function render() {
    // Effacer le rendu précédent
    renderer.clear();
    // Rendu de la scène 3D

    renderer.render(scene, camera);
}

function animate() {

    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0005;
    onWindowResize()
    render();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();