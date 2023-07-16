import * as THREE from "./three-module.js";

const container = document.getElementById('3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight,
    0.1, 1000);
camera.position.set(0, 1.8, 8);

// Rendu
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true,});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.autoClear = false;
renderer.setPixelRatio(Math.min(window.devicePixelRatio));
container.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load("./js/src/texture/logo.png");
const geometry = new THREE.SphereGeometry(1, 80, 80);
const material = new THREE.MeshStandardMaterial({map: texture, wireframe: false});
const mesh = new THREE.Mesh(geometry, material);
mesh.receiveShadow = true
mesh.position.y = 3
mesh.rotation.x = 0
mesh.rotation.y = 4
scene.add(mesh);

// Lumière
const ambientLight = new THREE.AmbientLight(0xffffff, 0.001);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.castShadow = true
directionalLight.position.set(15, 5, 5);
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
document.body.onresize = onWindowResize

const pFolio = document.getElementById("portfolio")
function rotateCam() {
    const t = document.body.getBoundingClientRect().top;
    mesh.rotation.y += (-0.00005 * t);
    /*camera.rotation.y += (-0.00001 * t)
    mesh.rotation.y += (-0.0003 * t)*/
}
document.body.onscroll = rotateCam

animate();
