import * as THREE from 'three';

const myCanvas = document.getElementsByClassName('rotating-cube')[0];

const renderer = new THREE.WebGLRenderer({
  canvas: myCanvas,
  antialias: true
});

renderer.setSize(myCanvas.offsetWidth, myCanvas.offsetHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color("#219ebc")
const camera = new THREE.PerspectiveCamera(75, myCanvas.offsetWidth / myCanvas.offsetHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();