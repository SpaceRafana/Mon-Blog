import * as THREE from "./three-module.js";
import {GLTFLoader} from "./loader/GLTFLoader.js";

let container = document.getElementById('3d');
let scene,camera,renderer,mesh
init()
animate()
function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight,
        0.1, 1000);
    camera.position.set(0, 1.8, 8);

// Rendu
    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.autoClear = false;
    renderer.setPixelRatio(window.devicePixelRatio * 0.5);
    container.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load("./js/src/texture/texture-SR.png");
    const geometry = new THREE.SphereGeometry(1, 80, 80);
    const material = new THREE.MeshStandardMaterial({map: texture, wireframe: false});
    mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true
    mesh.position.y = 3
    mesh.rotation.x = 0
    mesh.rotation.y = 4
    scene.add(mesh);

    const loader = new GLTFLoader()
    loader.load('./js/src/modele/extraterrestre.glb', function (gltf) {
            const modele = gltf.scene

            modele.rotation.z = -0.4
            modele.position.set(-4, 1, 0)
            mesh.add(modele)

        }, function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% chargé');
        },
        function (error) {
            console.error(error);
        }
    )

// Lumière
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.001);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.castShadow = true
    directionalLight.position.set(15, 5, 5);
    scene.add(directionalLight, ambientLight);

    let prevScroll = window.scrollY
    function rotateMesh() {
        const currentScroll = window.scrollY
        if (prevScroll > currentScroll) {
            mesh.rotation.y -= 0.02
        }
        else {
            mesh.rotation.y += 0.02
        }
        prevScroll = currentScroll
    }
    window.addEventListener('scroll', rotateMesh)

}

function render() {
    renderer.clear();
    renderer.render(scene, camera);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
document.body.onresize = onWindowResize

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0005;
    onWindowResize()
    render();
}
